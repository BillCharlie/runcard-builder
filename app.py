"""Flask backend for Process Runcard-Builder."""
from __future__ import annotations

import hashlib
import os
from pathlib import Path

from flask import Flask, abort, jsonify, request, send_from_directory

import db

ROOT = Path(__file__).resolve().parent

app = Flask(__name__, static_folder=None)
db.init_db()


def _body() -> dict:
    return request.get_json(silent=True) or {}


def _hash(value: str) -> str:
    return hashlib.sha256(value.encode()).hexdigest()


def _public_session(session: dict) -> dict:
    return {
        "id": session["id"],
        "name": session["name"],
        "created_at": session["created_at"],
        "updated_at": session["updated_at"],
        "requires_password": bool(session.get("pass_hash")),
        "runcard_count": session.get("runcard_count", 0),
        "last_activity": session.get("last_activity"),
    }


def _admin_hash_ok() -> bool:
    expected = os.environ.get("RUNCARD_ADMIN_HASH", "").strip().lower()
    supplied = request.headers.get("X-Admin-Hash", "").strip().lower()
    return bool(expected and supplied == expected)


def _session_access(session_id: int) -> bool:
    if _admin_hash_ok():
        return True
    supplied = request.headers.get("X-Session-Hash", "").strip().lower()
    return db.check_session_hash(session_id, supplied)


def _require_session_access(session_id: int) -> None:
    if not _session_access(session_id):
        abort(403, "Session password required.")


@app.get("/")
def index():
    return send_from_directory(ROOT, "index.html")


@app.get("/src/<path:path>")
def src_files(path: str):
    return send_from_directory(ROOT / "src", path)


@app.get("/vendor/<path:path>")
def vendor_files(path: str):
    return send_from_directory(ROOT / "vendor", path)


@app.get("/preview.png")
def preview():
    return send_from_directory(ROOT, "preview.png")


@app.get("/api/health")
def health():
    return {"status": "ok"}


@app.get("/api/projects")
def list_sessions():
    return jsonify(db.get_all_sessions())


@app.post("/api/projects")
def create_session():
    body = _body()
    name = (body.get("name") or "").strip()
    password = body.get("password") or ""
    password2 = body.get("password2") or ""
    if not name:
        abort(400, "Session name is required.")
    if password != password2:
        abort(400, "Passwords do not match.")
    session_id, err = db.create_session(name, password)
    if err:
        abort(400, err)
    return jsonify(_public_session(db.get_session(session_id)))


@app.post("/api/projects/<int:session_id>/verify")
def verify_session(session_id: int):
    body = _body()
    password = body.get("password") or ""
    granted = db.check_session_password(session_id, password)
    return jsonify({"granted": granted, "session_hash": _hash(password) if granted else ""})


@app.delete("/api/projects/<int:session_id>")
def delete_session(session_id: int):
    _require_session_access(session_id)
    db.delete_session(session_id)
    return jsonify({"status": "deleted"})


@app.get("/api/projects/<int:session_id>/runcards")
def list_runcards(session_id: int):
    _require_session_access(session_id)
    return jsonify(db.get_runcards_for_session(session_id))


@app.post("/api/projects/<int:session_id>/runcards")
def create_runcard(session_id: int):
    _require_session_access(session_id)
    body = _body()
    name = (body.get("name") or "").strip()
    if not name:
        abort(400, "Runcard name is required.")
    draft = body.get("draft") or {"meta": {"title": name, "owner": body.get("owner") or "", "equipmentMode": "track"}, "cards": []}
    runcard_id, err = db.create_runcard(
        session_id,
        name,
        body.get("description") or "",
        body.get("owner") or "",
        draft,
    )
    if err:
        abort(400, err)
    return jsonify(db.get_runcard(runcard_id))


@app.put("/api/projects/<int:session_id>/runcards/<int:runcard_id>/draft")
def update_draft(session_id: int, runcard_id: int):
    _require_session_access(session_id)
    body = _body()
    draft = body.get("draft") or {"meta": {}, "cards": []}
    name = body.get("name") or draft.get("meta", {}).get("title") or "Untitled Runcard"
    owner = body.get("owner") or draft.get("meta", {}).get("owner") or ""
    runcard = db.get_runcard(runcard_id)
    if not runcard or int(runcard["session_id"]) != session_id:
        abort(404, "Runcard not found.")
    err = db.update_runcard_draft(runcard_id, name, owner, draft)
    if err:
        abort(400, err)
    return jsonify({"status": "saved"})


@app.delete("/api/projects/<int:session_id>/runcards/<int:runcard_id>")
def delete_runcard(session_id: int, runcard_id: int):
    _require_session_access(session_id)
    runcard = db.get_runcard(runcard_id)
    if not runcard or int(runcard["session_id"]) != session_id:
        abort(404, "Runcard not found.")
    db.delete_runcard(runcard_id)
    return jsonify({"status": "deleted"})


@app.post("/api/projects/<int:session_id>/runcards/<int:runcard_id>/commit")
def commit_runcard(session_id: int, runcard_id: int):
    _require_session_access(session_id)
    runcard = db.get_runcard(runcard_id)
    if not runcard or int(runcard["session_id"]) != session_id:
        abort(404, "Runcard not found.")
    body = _body()
    state = body.get("state") or {"meta": {}, "cards": []}
    label = (body.get("label") or "").strip()
    if not label:
        abort(400, "Version name is required.")
    version_number, err = db.commit_version(
        runcard_id,
        label,
        state,
        body.get("summary") or "",
        bool(body.get("overwrite")),
    )
    if err:
        abort(400, err)
    return jsonify({"status": "committed", "version_number": version_number, "runcard": db.get_runcard(runcard_id)})


@app.post("/api/projects/<int:session_id>/runcards/<int:runcard_id>/restore/<int:version_number>")
def restore_runcard(session_id: int, runcard_id: int, version_number: int):
    _require_session_access(session_id)
    runcard = db.get_runcard(runcard_id)
    if not runcard or int(runcard["session_id"]) != session_id:
        abort(404, "Runcard not found.")
    _, err = db.restore_version(runcard_id, version_number)
    if err:
        abort(400, err)
    return jsonify({"status": "restored", "runcard": db.get_runcard(runcard_id)})


@app.errorhandler(400)
@app.errorhandler(403)
@app.errorhandler(404)
def handle_error(exc):
    return jsonify({"error": getattr(exc, "description", str(exc))}), exc.code


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5051)), debug=False)

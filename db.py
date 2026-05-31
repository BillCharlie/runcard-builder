"""SQLite persistence layer for Process Runcard-Builder."""
from __future__ import annotations

import hashlib
import json
import os
import sqlite3

DB_PATH = os.environ.get("RUNCARD_DB_PATH", os.environ.get("DB_PATH", "runcard_builder.db"))


def _conn() -> sqlite3.Connection:
    db_dir = os.path.dirname(os.path.abspath(DB_PATH))
    if db_dir:
        os.makedirs(db_dir, exist_ok=True)
    db = sqlite3.connect(DB_PATH)
    db.row_factory = sqlite3.Row
    try:
        db.execute("PRAGMA journal_mode=WAL;")
    except sqlite3.OperationalError:
        db.execute("PRAGMA journal_mode=DELETE;")
    db.execute("PRAGMA foreign_keys=ON;")
    return db


def init_db() -> None:
    db = _conn()
    db.executescript(
        """
        CREATE TABLE IF NOT EXISTS runcard_sessions (
            id          INTEGER PRIMARY KEY AUTOINCREMENT,
            name        TEXT    NOT NULL UNIQUE,
            pass_hash   TEXT    NOT NULL DEFAULT '',
            created_at  TEXT    NOT NULL DEFAULT (datetime('now')),
            updated_at  TEXT    NOT NULL DEFAULT (datetime('now'))
        );

        CREATE TABLE IF NOT EXISTS runcards (
            id                     INTEGER PRIMARY KEY AUTOINCREMENT,
            session_id             INTEGER NOT NULL,
            name                   TEXT    NOT NULL,
            description            TEXT    DEFAULT '',
            owner                  TEXT    DEFAULT '',
            draft                  TEXT    NOT NULL DEFAULT '{"meta":{"title":"Custom Runcard","owner":"","equipmentMode":"track"},"cards":[]}',
            current_version_number INTEGER NOT NULL DEFAULT 0,
            created_at             TEXT    NOT NULL DEFAULT (datetime('now')),
            updated_at             TEXT    NOT NULL DEFAULT (datetime('now')),
            FOREIGN KEY (session_id) REFERENCES runcard_sessions(id) ON DELETE CASCADE,
            UNIQUE(session_id, name)
        );

        CREATE TABLE IF NOT EXISTS runcard_versions (
            id             INTEGER PRIMARY KEY AUTOINCREMENT,
            runcard_id     INTEGER NOT NULL,
            version_number INTEGER NOT NULL,
            label          TEXT    NOT NULL,
            state          TEXT    NOT NULL,
            summary        TEXT    DEFAULT '',
            created_at     TEXT    NOT NULL DEFAULT (datetime('now')),
            FOREIGN KEY (runcard_id) REFERENCES runcards(id) ON DELETE CASCADE,
            UNIQUE(runcard_id, version_number)
        );
        """
    )
    db.commit()
    db.close()


def hash_password(password: str) -> str:
    return hashlib.sha256(password.encode()).hexdigest()


def _json_loads(value: str, fallback):
    try:
        return json.loads(value)
    except Exception:
        return fallback


def _session_dict(row: sqlite3.Row) -> dict:
    return dict(row)


def _runcard_dict(row: sqlite3.Row, include_versions: bool = True) -> dict:
    item = dict(row)
    item["draft"] = _json_loads(item.get("draft") or "{}", {"meta": {}, "cards": []})
    if include_versions:
        item["versions"] = get_versions(item["id"])
    return item


def _touch_session(session_id: int, db: sqlite3.Connection) -> None:
    db.execute("UPDATE runcard_sessions SET updated_at = datetime('now') WHERE id = ?", (session_id,))


def create_session(name: str, password: str = "") -> tuple[int | None, str | None]:
    db = _conn()
    try:
        cur = db.execute(
            "INSERT INTO runcard_sessions (name, pass_hash) VALUES (?, ?)",
            (name.strip(), hash_password(password) if password else ""),
        )
        db.commit()
        return cur.lastrowid, None
    except sqlite3.IntegrityError:
        return None, "A session with that name already exists."
    except Exception as exc:
        return None, str(exc)
    finally:
        db.close()


def get_all_sessions() -> list[dict]:
    db = _conn()
    rows = db.execute(
        """
        SELECT s.id, s.name, s.created_at, s.updated_at,
               CASE WHEN s.pass_hash = '' THEN 0 ELSE 1 END AS requires_password,
               COUNT(r.id) AS runcard_count,
               MAX(r.updated_at) AS last_activity
        FROM runcard_sessions s
        LEFT JOIN runcards r ON r.session_id = s.id
        GROUP BY s.id
        ORDER BY s.updated_at DESC
        """
    ).fetchall()
    db.close()
    return [_session_dict(row) for row in rows]


def get_session(session_id: int) -> dict | None:
    db = _conn()
    row = db.execute("SELECT * FROM runcard_sessions WHERE id = ?", (session_id,)).fetchone()
    db.close()
    return dict(row) if row else None


def check_session_password(session_id: int, password: str) -> bool:
    session = get_session(session_id)
    if not session:
        return False
    return not session["pass_hash"] or session["pass_hash"] == hash_password(password)


def check_session_hash(session_id: int, pass_hash: str) -> bool:
    session = get_session(session_id)
    if not session:
        return False
    return not session["pass_hash"] or session["pass_hash"] == pass_hash.lower()


def delete_session(session_id: int) -> None:
    db = _conn()
    db.execute("DELETE FROM runcard_sessions WHERE id = ?", (session_id,))
    db.commit()
    db.close()


def get_runcards_for_session(session_id: int) -> list[dict]:
    db = _conn()
    rows = db.execute(
        "SELECT * FROM runcards WHERE session_id = ? ORDER BY updated_at DESC",
        (session_id,),
    ).fetchall()
    db.close()
    return [_runcard_dict(row) for row in rows]


def create_runcard(session_id: int, name: str, description: str, owner: str, draft: dict) -> tuple[int | None, str | None]:
    db = _conn()
    try:
        cur = db.execute(
            """
            INSERT INTO runcards (session_id, name, description, owner, draft)
            VALUES (?, ?, ?, ?, ?)
            """,
            (session_id, name.strip(), description.strip(), owner.strip(), json.dumps(draft, ensure_ascii=False)),
        )
        _touch_session(session_id, db)
        db.commit()
        return cur.lastrowid, None
    except Exception as exc:
        return None, str(exc)
    finally:
        db.close()


def get_runcard(runcard_id: int) -> dict | None:
    db = _conn()
    row = db.execute("SELECT * FROM runcards WHERE id = ?", (runcard_id,)).fetchone()
    db.close()
    return _runcard_dict(row) if row else None


def update_runcard_draft(runcard_id: int, name: str, owner: str, draft: dict) -> str | None:
    db = _conn()
    try:
        row = db.execute("SELECT session_id FROM runcards WHERE id = ?", (runcard_id,)).fetchone()
        if not row:
            return "Runcard not found."
        db.execute(
            """
            UPDATE runcards
            SET name = ?, owner = ?, draft = ?, updated_at = datetime('now')
            WHERE id = ?
            """,
            (name.strip(), owner.strip(), json.dumps(draft, ensure_ascii=False), runcard_id),
        )
        _touch_session(row["session_id"], db)
        db.commit()
        return None
    except Exception as exc:
        return str(exc)
    finally:
        db.close()


def delete_runcard(runcard_id: int) -> None:
    db = _conn()
    try:
        row = db.execute("SELECT session_id FROM runcards WHERE id = ?", (runcard_id,)).fetchone()
        db.execute("DELETE FROM runcards WHERE id = ?", (runcard_id,))
        if row:
            _touch_session(row["session_id"], db)
        db.commit()
    finally:
        db.close()


def get_versions(runcard_id: int) -> list[dict]:
    db = _conn()
    rows = db.execute(
        "SELECT * FROM runcard_versions WHERE runcard_id = ? ORDER BY version_number DESC",
        (runcard_id,),
    ).fetchall()
    db.close()
    versions = []
    for row in rows:
        item = dict(row)
        item["state"] = _json_loads(item["state"], {"meta": {}, "cards": []})
        versions.append(item)
    return versions


def commit_version(runcard_id: int, label: str, state: dict, summary: str, overwrite: bool = False) -> tuple[int | None, str | None]:
    db = _conn()
    try:
        runcard = db.execute("SELECT session_id, current_version_number FROM runcards WHERE id = ?", (runcard_id,)).fetchone()
        if not runcard:
            return None, "Runcard not found."
        if overwrite and runcard["current_version_number"]:
            version_number = int(runcard["current_version_number"])
            db.execute(
                """
                UPDATE runcard_versions
                SET label = ?, state = ?, summary = ?, created_at = datetime('now')
                WHERE runcard_id = ? AND version_number = ?
                """,
                (label.strip(), json.dumps(state, ensure_ascii=False), summary, runcard_id, version_number),
            )
        else:
            row = db.execute(
                "SELECT MAX(version_number) AS mx FROM runcard_versions WHERE runcard_id = ?",
                (runcard_id,),
            ).fetchone()
            version_number = (row["mx"] or 0) + 1
            db.execute(
                """
                INSERT INTO runcard_versions (runcard_id, version_number, label, state, summary)
                VALUES (?, ?, ?, ?, ?)
                """,
                (runcard_id, version_number, label.strip(), json.dumps(state, ensure_ascii=False), summary),
            )
        db.execute(
            """
            UPDATE runcards
            SET draft = ?, current_version_number = ?, updated_at = datetime('now')
            WHERE id = ?
            """,
            (json.dumps(state, ensure_ascii=False), version_number, runcard_id),
        )
        _touch_session(runcard["session_id"], db)
        db.commit()
        return version_number, None
    except Exception as exc:
        return None, str(exc)
    finally:
        db.close()


def restore_version(runcard_id: int, version_number: int) -> tuple[dict | None, str | None]:
    db = _conn()
    try:
        version = db.execute(
            "SELECT state FROM runcard_versions WHERE runcard_id = ? AND version_number = ?",
            (runcard_id, version_number),
        ).fetchone()
        if not version:
            return None, "Version not found."
        runcard = db.execute("SELECT session_id FROM runcards WHERE id = ?", (runcard_id,)).fetchone()
        state = _json_loads(version["state"], {"meta": {}, "cards": []})
        db.execute(
            """
            UPDATE runcards
            SET draft = ?, current_version_number = ?, updated_at = datetime('now')
            WHERE id = ?
            """,
            (json.dumps(state, ensure_ascii=False), version_number, runcard_id),
        )
        if runcard:
            _touch_session(runcard["session_id"], db)
        db.commit()
        return state, None
    except Exception as exc:
        return None, str(exc)
    finally:
        db.close()

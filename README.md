# Process Runcard-Builder
# https://billcharlie.github.io/runcard-builder/
# 請務必閱讀License
作者 / Author: Ping yu-Chen, Taiwan 版本 / Version: v2.0 授權 / License: 請詳閱 LICENSE / See LICENSE — 商業使用須授權 / Commercial use requires written permission

## Backend / Cloud Save

RuncardBuilder now includes a Flask + SQLite backend for shared project storage:

```text
Project Session
  └─ Runcard
      ├─ Draft state
      └─ Version commits
```

Local start:

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
python start.py
```

Open:

```text
http://127.0.0.1:5051
```

Important environment variables:

```text
RUNCARD_DB_PATH      SQLite database path, default runcard_builder.db
PORT                 Server port for cloud platforms
RUNCARD_ADMIN_HASH   Optional SHA-256 admin hash for API admin deletes
```

Cloud deployment uses `Procfile`:

```text
web: gunicorn app:app --bind 0.0.0.0:$PORT
```

The frontend still works as a single-page builder, but Sessions, Runcards, draft states, and Commit versions are now saved through backend APIs instead of only browser `localStorage`.

授權聲明 / License Notice
本系統核心代碼受自訂授權條款（Source Available License v2.0）保護。

This software is protected under a custom Source Available License v2.0.

任何形式的使用、下載、部署、衍生開發，均須明確標示作者：Ping yu-Chen, Taiwan
Any use, download, deployment, or derivative work must clearly credit the author: Ping yu-Chen, Taiwan
商業用途須事先取得書面授權 / Commercial use requires prior written authorization
商業授權洽詢 / Commercial licensing contact: chenbill718@gmail.com
詳見 LICENSE / See LICENSE for full terms.

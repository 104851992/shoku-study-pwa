# v1.0.2 — Expo configuration + safe startup (2026-11-11)

Base: complete v1.0.1 source ZIP `Shoku_Study_v11_progress_patch.zip`; retained all 500 original draft questions, storage keys, and previous changes.

## Fixes
1. `app.json`: remove invalid `@react-native-async-storage/async-storage` entry from Expo config plugins. This module remains in dependencies; removing the plugin entry does **not** remove AsyncStorage.
2. `src/AppRoot.tsx`: block automatic progress writes if the initial AsyncStorage read rejects. Previously, a failed read left `freshProgress()` in state and the save effect could overwrite an existing saved record with empty data. On read failure the UI still indicates a save error; the app does not silently reset persistent progress.
3. Add `scripts/check_release_safety.py` offline regression guard for both fixes.

## Verification
- `python scripts/validate_bank.py`: PASS, 500 questions, 0 structural errors, 0 warnings; all `draft_review`, not verified official questions.
- `python scripts/check_release_safety.py`: PASS (static source/config regression checks, not runtime tests).
- `npm install --no-audit --no-fund --prefer-offline --fetch-retries=0 --fetch-timeout=15000`: FAILED (network DNS `EAI_AGAIN` contacting registry.npmjs.org). Consequently TypeScript compilation, Expo Web export and real browser/iOS/Android tests are NOT verified here.
- No production Netlify update performed.

## Windows steps
Extract to a **new** folder; back up the current source and Netlify deployment. From PowerShell inside the extracted project:

```powershell
npm.cmd install
python scripts/validate_bank.py
python scripts/check_release_safety.py
npx.cmd tsc --noEmit
npx.cmd expo export --platform web
```

Test answer recording, refresh/restart, saved progress, existing data and PWA installation/offline behavior before uploading `dist` to the **existing** Netlify site. Do not clear site storage. No storage key migration is needed.

## Remaining risk
Initial read rejection prevents destructive overwrite but cannot recover a broken browser storage backend. Persisted session drafts and cross-platform browser storage still need runtime regression tests. No new subject-matter questions were added; quality-first priority.

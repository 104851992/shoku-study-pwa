# QA UPDATE v70 — 2026-11-14

Baseline: complete v69 source archive, 500 questions and QA reports v04–v69. Scope: 食のまなびノート only.

## Fix
Prevent deletion of all learning records from racing with backup export or restore. Added `resetLocked` ref; reset is blocked during export/restore, export and restore are blocked during reset, and reset rechecks after the confirmation dialog. Lock acquired before pending writes are drained and released in `finally` even on failure. No storage key, schema, question ID, or data migration changes.

## Verification
- New reset/export/restore static assertions: 7/7 pass.
- v69 export/restore static checks: pass; v68 restore interlocks 7/7 pass; v67 restore UI 11/11 pass.
- Existing Node runtime regressions: 59/59 pass (18 backup, 10 read, 7 export, 10 boundary, 9 write, 3 restore, 2 rollback).
- Question bank structure: 500, grade 3=265, grade 2=135, grade 1=100; 0 errors, 0 warnings.
- Service worker JavaScript syntax: pass.
- TypeScript project and Expo Web build: not executed; dependencies are absent in provided archive.
- Browser, offline PWA installation, iOS/Android: not tested.

## Known risks and release procedure
- Static locking checks are not a substitute for browser concurrency tests. Two-key AsyncStorage restoration is not atomic; rollback is best effort.
- All 500 questions remain `original/draft_review`; none should be described as verified official past questions. No content added or verified in this run.
- Windows: run `npm.cmd install`, `python scripts/validate_bank.py`, `python scripts/check_reset_backup_mutex_v70.py`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`.
- Test backup, restore, deletion confirmation, refresh, offline restart and PWA installation in a disposable browser profile. Independently back up existing study data before manually deploying `dist` to the *same* Netlify site. No online deployment occurred.

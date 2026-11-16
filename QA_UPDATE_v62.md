# QA UPDATE v62 — 2026-11-13

Baseline: v61 complete project, 500-question bank and QA reports through v61. This update affects only 食のまなびノート, not FE Mate AI.

## Change
Added `scripts/test_backup_export_runtime_v62.cjs` to execute the actual TypeScript `createBackup()` with mocked AsyncStorage. Seven cases cover progress-only, draft-only, combined raw-byte preservation, empty data, corrupt progress, corrupt draft and storage read errors. Asserts zero storage writes or deletions. No production code, storage keys, question IDs, schema or application version changed.

## Checks performed
- `node scripts/test_backup_export_runtime_v62.cjs`: 7/7 pass, 0 writes
- `node scripts/test_storage_runtime_v61.cjs`: 10/10 pass
- `node scripts/test_backup_runtime_v60.cjs`: 18/18 pass
- `python scripts/validate_bank.py`: 500 total (3級 265, 2級 135, 1級 100), 0 errors, 0 warnings
- Archive CRC: check after packaging

All 500 items remain original/draft_review, NOT verified official examination questions. No subject-matter claims newly verified.

## Open risks
TypeScript project-wide typecheck and Expo Web build not run (project npm dependencies absent). Browser, iOS/Android device, PWA install/offline and actual storage end-to-end tests remain pending. JSON restoration remains unimplemented. This is a test-only release, not a fix to the UI. No Netlify deployment was performed.

## Windows manual acceptance
Unzip to a new folder, back up current learning data first, run `npm.cmd install`, `python scripts/validate_bank.py`, `node scripts/test_backup_export_runtime_v62.cjs`, `node scripts/test_storage_runtime_v61.cjs`, `node scripts/test_backup_runtime_v60.cjs`, `npx.cmd tsc --noEmit`, and `npx.cmd expo export --platform web`. Verify backup/download, reload, install/offline and learning history in a real browser before manually deploying `dist` to Netlify. Do not clear browser site data during testing.

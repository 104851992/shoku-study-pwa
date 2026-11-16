# QA UPDATE v63 — 2026-11-13

Baseline: complete v62 project, 500-question bank and prior QA reports. Only 食のまなびノート is affected.

## Work completed
Added `scripts/test_backup_boundaries_v63.cjs`, a runtime regression harness that transpiles and executes the actual TypeScript `validateBackupEnvelope` function. Ten cases exercise retired historical question IDs, invalid grades, negative/fractional counters, impossible and valid leap days, invalid timestamps, and legacy favorites behavior. This is test coverage only; no application business code, storage key, schema, question ID, question content, or app version was changed.

## Executed checks
- Backup boundary runtime: 10/10 pass
- Existing backup validator runtime: 18/18 pass
- Existing storage runtime: 10/10 pass
- Existing backup export runtime: 7/7 pass, zero writes
- Question structure: 500 total (3級 265 / 2級 135 / 1級 100), zero errors/warnings
- Service worker JavaScript syntax: pass
- Archive integrity: check after packaging

## Unverified and risks
- Full project TypeScript check and Expo Web build require installed npm dependencies; not run here.
- Real browser IndexedDB/AsyncStorage restoration, offline install, and iOS/Android device tests are pending.
- JSON restoration UI is not implemented; read-only JSON inspection exists.
- All 500 questions remain `original / draft_review`; no verified official past questions and no new subject-matter verification this run.
- No Netlify deployment or online verification was performed.

## Windows / Netlify steps
Unzip to a new folder. Back up existing learning data before trying a new build; never clear the website's site data. In PowerShell run `npm.cmd install`, `python scripts/validate_bank.py`, `node scripts/test_backup_boundaries_v63.cjs`, `node scripts/test_backup_runtime_v60.cjs`, `node scripts/test_storage_runtime_v61.cjs`, `node scripts/test_backup_export_runtime_v62.cjs`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`. Check progress, history, backup download, install and offline reload in a real browser before manually deploying `dist` to Netlify. Keep the existing Netlify domain to preserve origin-scoped browser storage.

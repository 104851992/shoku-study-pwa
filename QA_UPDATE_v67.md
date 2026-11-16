# QA UPDATE v67 — 2026-11-14

Baseline: v66 complete source, all prior QA reports, question bank and regression scripts. Scope: 食のまなびノート only.

## Changes
Web Settings now exposes JSON restore. It validates the selected backup (5 MiB maximum), requires explicit overwrite confirmation, locks autosaves and invalidates queued generations, drains outstanding save promises, invokes the v65–66 verified/rollback restore service, and reloads the page on success to rehydrate from storage. On failure, autosaves remain locked for the current page to avoid overwriting uncertain data. Native iOS/Android restore is not yet supported. Existing storage keys, backup schema, question IDs, and learning data schema remain unchanged.

## Verification
- `python scripts/validate_bank.py`: 500 questions (grade 3:265, 2:135, 1:100), 0 errors / 0 warnings.
- `python scripts/check_restore_ui_v67.py`: 11/11 static guard checks pass. These are not browser end-to-end tests.
- `node scripts/test_restore_rollback_v66.cjs`: 2/2 pass.
- `node scripts/test_restore_service_v65.cjs`: 3/3 pass.
- `node scripts/test_storage_writes_v64.cjs`: 9/9 pass.
- `node scripts/test_storage_runtime_v61.cjs`: 10/10 pass.
- `node scripts/test_backup_runtime_v60.cjs`: 18/18 pass.
- `node scripts/test_backup_export_runtime_v62.cjs`: 7/7 pass.
- `node scripts/test_backup_boundaries_v63.cjs`: 10/10 pass.
- `node --check public/sw.js`: pass.
- TypeScript check attempted: failed due to missing project npm dependencies/Expo inherited tsconfig.
- Expo Web export attempted but timed out / not verified because dependencies are missing.
- No real browser, offline installation, iOS or Android device test completed.

## Risks
The new restore UI has not passed browser E2E tests. In particular, browser file picker, confirmation, queued autosaves, reload and storage error paths must be tested in a disposable browser profile. AsyncStorage cannot guarantee atomic transactions across two keys; rollback can fail. Do not deploy without manually validating restore from a copy of real learning data. All 500 questions remain `original / draft_review`; none is verified as official past questions. No subject-matter additions or verification this run.

## Windows / Netlify
Extract ZIP. In PowerShell in the project directory:
```
npm.cmd install
python scripts/validate_bank.py
python scripts/check_restore_ui_v67.py
node scripts/test_restore_service_v65.cjs
node scripts/test_restore_rollback_v66.cjs
npx.cmd tsc --noEmit
npx.cmd expo export --platform web
```
Test backup export, restore, refresh, exam draft, history, and offline startup in a disposable browser profile first. Save an independent JSON backup of current production data. Deploy the generated `dist` folder manually to the existing Netlify site only after acceptance. No production deployment was performed.

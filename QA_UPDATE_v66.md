# QA UPDATE v66 — 2026-11-14

Baseline: v65 complete source, 500-question bank, historical QA reports and regression scripts. Scope: 食のまなびノート only.

## Fix
The restore service previously attempted rollback after a failed restore but did not read back the restored original values. Some AsyncStorage adapters can resolve writes without persisting them. `restoreBackupAfterConfirmation()` now verifies both original raw keys after rollback and reports a critical failure when rollback cannot be verified. It does not silently claim recovery. The UI restore control remains disabled; no user data was touched.

## Tests performed
- `python scripts/validate_bank.py`: 500 (3級265, 2級135, 1級100), 0 errors / 0 warnings.
- `node scripts/test_restore_rollback_v66.cjs`: 2/2 pass (silent restore write and silent rollback write failures).
- `node scripts/test_restore_service_v65.cjs`: 3/3 pass.
- `node scripts/test_storage_writes_v64.cjs`: 9/9 pass.
- `node scripts/test_storage_runtime_v61.cjs`: 10/10 pass.
- `node scripts/test_backup_runtime_v60.cjs`: 18/18 pass.
- `node scripts/test_backup_export_runtime_v62.cjs`: 7/7 pass.
- `node scripts/test_backup_boundaries_v63.cjs`: 10/10 pass.
- Service Worker JS syntax: passed.
- `tsc --noEmit`: attempted but cannot pass without project dependencies / tsconfig inherited from Expo.
- Expo web export: not verified; dependencies absent and invocation timed out.
- No real browser, iOS or Android device tests.

## Data and content
No AsyncStorage keys, backup JSON schema, question IDs, or user-facing functionality changed. All 500 questions remain original draft_review, NOT official past exam questions. No new subject-matter verification performed.

## Next steps / manual Windows + Netlify
In the extracted project directory run `npm.cmd install`, `python scripts/validate_bank.py`, `node scripts/test_restore_rollback_v66.cjs`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`. Back up existing browser data and validate in a disposable profile, especially backup export and offline install, before manually deploying `dist` to the EXISTING Netlify site. The production website has not been updated.

## Remaining risks
Rollback cannot be made atomic across two keys and may still fail due to crashes or persistent storage faults. UI restore remains disabled pending autosave suspension, explicit confirmation and full end-to-end testing. Content verification, offline launch and mobile testing outstanding.

# QA update v112 — PWA manifest and icon integrity

## Baseline and scope
Continued from the complete v111 archive. This is 食のまなびノート, not FE Mate AI. Existing 506 questions, QA history, source, IDs, storage keys and backup schema retained.

## Change
Added `scripts/test_pwa_manifest_integrity_v112.cjs`, a dependency-free guard for manifest display/start/scope, name/theme consistency with Expo config, PNG signature and actual 192/512 pixel dimensions, and matching service-worker precache entries. Six fixtures include negative cases for missing icon, incorrect scope/theme, corrupt icon, and missing precache path. No runtime application code changed.

## Checks performed
- New PWA guard: 6/6 passed.
- All `scripts/test_*.cjs`: 54/54 scripts passed.
- `python scripts/validate_bank.py`: 506 questions, 3級267 / 2級137 / 1級102; 0 structural errors, 0 warnings.
- `node --check public/sw.js`: passed.
- TypeScript full check and Expo Web export: not executed; project dependencies are not installed in this environment.
- Real browsers, installation, offline restart, iOS/Android and Netlify: not tested.
- All questions remain original draft_review, not verified official past questions.

## Remaining risks and manual release
A static manifest check does not prove installability or offline functionality. On Windows extract the archive, back up browser learning records, run `npm.cmd install`, `node scripts/test_pwa_manifest_integrity_v112.cjs`, `python scripts/validate_bank.py`, `npx.cmd tsc --noEmit`, and `npx.cmd expo export --platform web`. Test real browser persistence, backup/restore, install and offline restart before manually deploying `dist` to Netlify. No claim of online update or data migration.

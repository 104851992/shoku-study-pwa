# QA update v117 — progress read safety regression

## Baseline
Continued from complete v116 ZIP and its 506-question bank, source files, previous QA reports, and regression scripts. This release is for 食のまなびノート, not FE Mate AI.

## Change
Added `scripts/test_progress_read_safety_v117.cjs` (9 tests). It loads the real TypeScript progress module with a mocked AsyncStorage adapter, verifies storage-read errors and malformed persisted data reject without writing or deleting anything, and checks empty storage and a compatible legacy record. No production code or questions changed.

## Checks performed
- New progress-read regression: 9/9 pass.
- All `scripts/test_*.cjs`: 55/55 scripts pass.
- Question structure: 506 (3級 267 / 2級 137 / 1級 102), zero errors and warnings.
- CSV catalog sync: 506/506.
- PNG pixel decoding: 3/3; PNG chunk integrity: 4/4.
- Service worker JavaScript syntax: passed (`node --check public/sw.js`).
- TypeScript project check: attempted but failed due to absent installed project dependencies; no typecheck success claim.
- Expo Web export: not run because dependencies are absent.
- Real browser, iOS, Android, offline PWA, and Netlify deployment: not tested.

## Compatibility and content status
No application source, question IDs, storage keys, backup schema, or questions changed. All 506 questions remain original, `draft_review` and not verified official past questions. Test mocks are not proof of physical-device storage durability or browser offline operation.

## Windows and Netlify
Unzip; in PowerShell run `npm.cmd install`, `node scripts/test_progress_read_safety_v117.cjs`, `python scripts/validate_bank.py`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`. Back up learning data first, then manually test persistence, backup/restore, install/offline, and mobile platforms. Only after acceptance, manually deploy `dist` to Netlify. No live site changes have been made.

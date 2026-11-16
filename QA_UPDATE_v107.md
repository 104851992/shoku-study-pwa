# QA update v107 — Safe clear transaction fault injection

## Baseline and scope
Continued from complete v106 ZIP, including 506-question bank, QA history, and tests. This is 食のまなびノート, not FE Mate AI.

## Change
Added `scripts/test_clear_atomicity_v107.cjs`, which executes production TypeScript `clearAllLearningDataSafely` using an in-memory AsyncStorage mock. Four scenarios: second delete throws, second delete silently fails, rollback fails, and normal deletion succeeds. The first two must preserve both original records; rollback failure must raise an explicit unsafe-state error. No application code, question IDs, storage keys, or backup schema changed.

## Verification — 2026-11-15 JST
- New tests: 4/4 passed.
- Node test suites: 49/49 passed.
- `python scripts/validate_bank.py`: 506 total; grade 3 = 267, grade 2 = 137, grade 1 = 102; 0 structural errors and 0 warnings.
- `node --check public/sw.js`: passed.
- Full TypeScript check and Expo Web export: not run because project-local dependencies are absent.
- Real browser / iOS / Android / Netlify / offline behavior: not tested.
- Question provenance: all `draft_review` original practice material, NOT independently verified official past exam questions.

## Remaining risks and manual steps
This test does not cover process crashes, concurrent autosaves, storage quota failure, or actual browser behavior. Back up real learning data before testing. On Windows run `npm.cmd install`, `node scripts/test_clear_atomicity_v107.cjs`, `python scripts/validate_bank.py`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`. In a disposable browser profile, test reload persistence, backup/restore, confirmation before deletion, PWA install/offline restart, then manually deploy `dist` to Netlify only after acceptance. No production data or Netlify deployment was touched.

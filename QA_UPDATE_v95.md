# QA update v95 — Safe deletion failure regression

## Baseline and scope
Continued from complete v94 archive and QA_UPDATE_v94.md; this project is 食のまなびノート, not FE Mate AI. Question bank: 506 (3級 267, 2級 137, 1級 102); all `draft_review` original practice questions, not verified official examination items.

## Changes
Added `scripts/test_clear_data_faults_v95.cjs`, exercising the real TypeScript `clearAllLearningDataSafely` implementation with an in-memory AsyncStorage fault adapter. Covers (1) successful deletion of both v1 records; (2) second remove throwing, followed by verified rollback; (3) silently ignored first remove detected by read-back, followed by rollback; (4) failed rollback produces explicit unrecoverable warning. No production code, question text/IDs, storage keys, backup format, manifest, or Service Worker modified.

## Verification
- New regression: 4/4 passed.
- Node `.cjs` suites: 37/37 passed.
- Question bank structure: 506 entries; 0 errors, 0 warnings.
- Catalog sync: 506/506; 0 errors.
- Japanese text/Unicode audit: 0 issues in 4 files and 506 entries.
- Manifest and PNG audit: 0 errors.
- `node --check public/sw.js`: passed.
- TypeScript full project: attempted; dependencies absent, producing missing React types and JSX config errors; NOT passed.
- Expo Web export: not executed due to absent project dependencies.
- Real browser, iOS, Android, PWA offline startup, live Netlify: not tested.

## Compatibility and limitations
This is test-only hardening. Existing functionality and local learning data format are unchanged. Mock storage does not prove durability under browser quota eviction, abrupt process termination, or concurrent autosave. Before testing destructive operations, export a separate JSON backup and use a disposable browser profile. No claim of live deployment.

## Windows and Netlify handoff
After extracting, run `npm.cmd install`, `node scripts/test_clear_data_faults_v95.cjs`, `python scripts/validate_bank.py`, `npx.cmd tsc --noEmit`, and `npx.cmd expo export --platform web`. In a separate browser profile verify backup/export, restore, refresh persistence, deletion, installation, offline reload, and Safari/Chrome mobile behavior. Deploy the resulting `dist` manually to the existing Netlify site only after passing acceptance tests and backing up real data. Do not deploy this archive directly as a website.

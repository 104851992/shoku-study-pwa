# QA update v97 — Web JSON backup download regression

## Baseline and scope
Continued from the complete v96 ZIP and QA_UPDATE_v96.md, retaining all prior source, question bank, tests and QA notes. This is **食のまなびノート**, not FE Mate AI. Bank: 506 original `draft_review` questions (3級267 / 2級137 / 1級102); none are verified official past papers.

## Changes
Added `scripts/test_backup_download_v97.cjs`, exercising the production TypeScript `downloadBackupOnWeb` implementation with a simulated browser. Three cases: valid export preserves raw JSON and releases object URL; invalid envelope is rejected before creating a URL; oversized multi-byte UTF-8 JSON is rejected before creating a URL. No production code, question IDs, backup format, AsyncStorage keys, manifest, or Service Worker changed.

## Verification in this run
- New Web backup download suite: 3/3 passed.
- All Node `.cjs` regression suites: 39/39 passed.
- Question bank structural validation: 506 entries, 0 errors, 0 warnings.
- Catalog sync: 506/506, 0 errors.
- Japanese encoding audit: 0 issues across 4 files and 506 questions.
- Manifest/PNG audit: 0 errors.
- Service Worker JavaScript syntax: passed (`node --check public/sw.js`).
- TypeScript full project: attempted but **not verified**, because React/React Native/Expo dependencies are not installed; diagnostics include missing React modules and JSX config.
- Expo Web build: not run (dependencies absent).
- Real browsers, offline operation, iOS/Android and Netlify: not tested.

## Risks and Windows/Netlify handoff
The browser API test uses mocks and does not verify actual file picker/download permissions or browser persistence. A 5 MiB limit remains enforced for export. No content has been subject-matter verified; do not call the questions official past papers. On Windows: `npm.cmd install`, `node scripts/test_backup_download_v97.cjs`, `python scripts/validate_bank.py`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`. Independently back up current learning records, then test download, JSON inspection, restore, refresh persistence, PWA offline launch and mobile layouts in a disposable profile. Only after successful acceptance tests manually deploy the **dist** folder to the existing Netlify site. No online deployment or user data modification was performed.

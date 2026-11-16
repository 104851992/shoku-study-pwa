# QA update v115 — question catalog synchronization

## Baseline
Continued from complete v114 archive, including 506 original draft-review questions, historical QA reports, and existing tests. This project is 食のまなびノート, not FE Mate AI.

## Change
Added `scripts/test_catalog_sync_v115.py`, a read-only consistency check between the source of truth (`src/data/questions.ts`) and `QUESTION_CATALOG.csv`. It checks counts, unique IDs, grade, category, question type, Japanese prompt, 1-based displayed answer number, source provenance and review status. This prevents silent divergence when questions are edited in future. No application logic, question data, IDs, storage keys, backup schema or assets were changed.

## Actual checks
- New catalog synchronization: 506/506 records, 0 mismatches.
- Question bank validator: 506 questions (3級 267, 2級 137, 1級 102), 0 structural errors and 0 warnings.
- Node regression: 54/54 scripts passed.
- PNG pixel decode: 3/3 passed; PNG chunk integrity: 4/4 passed.
- Service worker JavaScript syntax: passed.
- TypeScript and Expo Web export: not executed; node_modules unavailable in this environment.
- Browser offline, iOS/Android and Netlify: not tested or deployed.

## Risks and deployment
All 506 questions remain `source=original`, `reviewStatus=draft_review`; no official question claims or independent subject-matter verification. Catalog matching only establishes metadata consistency. Before deploying, export a JSON backup of learning progress. On Windows, run `npm.cmd install`, `python scripts/test_catalog_sync_v115.py`, `python scripts/validate_bank.py`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`, then test persistence, restore, PWA installation/offline operation and mobile behavior. Manually deploy the `dist` directory to Netlify only after successful acceptance. The live website and user data have not been changed by this work.

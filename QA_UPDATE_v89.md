# QA update v89 — question catalog synchronization

## Baseline
Started from the complete v88 ZIP, including 506 canonical questions, historical QA reports, and 33 Node regression suites. FE Mate AI was not touched.

## Change
Added `scripts/check_catalog_sync_v89.py` to compare every `QUESTION_CATALOG.csv` row against `src/data/questions.ts`, including ordered IDs, grade, category, type, Japanese prompt, one-based correct-answer number, provenance, and review status. Added `scripts/test_catalog_sync_v89.py` with five tests, including intentionally corrupted answers and provenance. No application code or existing data was modified.

## Verification
- Catalog cross-check: 506/506 rows matched, 0 errors.
- New catalog-audit unit tests: 5/5 passed.
- Existing Node regression scripts: 33/33 passed.
- Question structure: 506 total (grade 3: 267, grade 2: 137, grade 1: 102); 0 errors, 0 warnings.
- Unicode audit: 0 findings.
- PWA static release gate: passed.
- Service Worker JavaScript syntax: passed.
- TypeScript and Expo Web export: not executed (node_modules absent; network-dependent npm installation not attempted).
- Real-browser offline/restore and iOS/Android device checks: not executed.

## Provenance and compatibility
All 506 questions remain `original` / `draft_review`. The catalog audit checks consistency, not nutritional correctness or official exam provenance. No storage keys, backup schema, question IDs, UI, cache versions, or learning records were changed.

## Windows / Netlify
Extract ZIP; back up current learning data independently. Run `npm.cmd install`, `python scripts/validate_bank.py`, `python scripts/check_catalog_sync_v89.py`, `python scripts/test_catalog_sync_v89.py`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`. Test restore, refresh persistence, offline launch and mobile layout in an isolated browser profile. Only then manually deploy `dist` to the existing Netlify site. No live deployment was performed.

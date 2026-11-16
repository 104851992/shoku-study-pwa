# QA UPDATE v85 — 2026-11-14

Baseline: v84 complete archive, 506 questions, all prior QA and test scripts. Scope: 食のまなびノート only.

## Change
Added `scripts/test_backup_export_v85.cjs`, five runtime regression scenarios exercising the actual TypeScript backup export service with a mocked AsyncStorage adapter: valid export preserving raw bytes; empty storage rejected; malformed progress rejected; invalid session draft rejected; storage read failure propagated. Each scenario checks that export never writes to storage. No production code, storage keys, schema, question IDs, or Service Worker changed.

## Results
- New export regression: 5/5 PASS.
- All Node `scripts/test_*.cjs` suites: 31/31 PASS.
- `python scripts/validate_bank.py`: 506 questions (grade 3: 267; grade 2: 137; grade 1: 102), 0 errors, 0 warnings.
- `python scripts/check_pwa_release_v74.py`: PASS (static only).
- `node --check public/sw.js`: PASS.
- TypeScript project check and Expo Web export: not executed; node_modules not installed. These are not verified.
- Real browser/iOS/Android/Netlify: not tested or deployed.

## Risks
Mocked storage tests do not establish persistence on real browsers or crash-atomic writes. Existing restore UI remains disabled. All 506 exercises are original draft_review items, not official past exam questions, and still require editorial review.

## Windows / Netlify
Extract to a new directory. Run `npm.cmd install`, `python scripts/validate_bank.py`, `node scripts/test_backup_export_v85.cjs`, `npx.cmd tsc --noEmit`, and `npx.cmd expo export --platform web`. Before deployment, independently back up existing learning data and test refresh, backup download, restore in a disposable profile, PWA installation and offline launch on target devices. Deploy the generated `dist` manually to the original Netlify site only after acceptance. No live deployment was made.

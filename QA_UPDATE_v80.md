# QA UPDATE v80 — 2026-11-14

Baseline: v79 full project archive and historical QA reports. Scope: 食のまなびノート only.

## Changes
Added `scripts/test_sw_privacy_v80.cjs`, executing the actual production Service Worker in a mocked fetch/cache environment. Eleven regression cases cover query strings, authorization, byte ranges, no-store requests, Netlify function paths, JSON paths, Set-Cookie, Vary: Cookie, private cache-control, Clear-Site-Data, and a normal cacheable JavaScript response. This is a test-only release. No production code, data storage keys, backup JSON schema, question IDs, or SW cache version changed.

## Results
- New privacy regression: 11/11 passed.
- All 27 Node `.cjs` suites: passed (previously 26).
- Bank: 500 total, grade 3 265 / grade 2 135 / grade 1 100; zero structural errors/warnings.
- PWA static gate: PASS. Service Worker JavaScript syntax: PASS.
- TypeScript project compilation: not verified; node_modules absent, missing React/Expo types and inherited Expo tsconfig.
- Expo Web export: not run because dependencies are absent.
- Real browser / iOS / Android testing: not performed.

## Content provenance
All 500 exercises remain `draft_review` original practice questions; structural validation is not fact checking. None are verified official examination questions.

## Known risks and Windows / Netlify manual steps
A mock Service Worker cannot prove browser storage privacy, offline install or recovery. Export a JSON backup of learning data before deployment. On Windows, extract to a separate directory and run `npm.cmd install`, `python scripts/validate_bank.py`, `node scripts/test_sw_privacy_v80.cjs`, `npx.cmd tsc --noEmit`, and `npx.cmd expo export --platform web`. Use a disposable browser profile to test backup/restore, offline startup and persistence; then manually deploy the generated `dist` directory to the existing Netlify site only after successful checks. No Netlify deployment performed and no online learning records were touched.

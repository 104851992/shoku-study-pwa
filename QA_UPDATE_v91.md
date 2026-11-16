# QA update v91 — previous offline cache fallback ordering

## Baseline
Continued from v90 full project archive, including 506 questions, catalog, prior QA notes and 33 Node test suites. This release does not touch FE Mate AI.

## Change
Added `scripts/test_sw_previous_cache_order_v91.cjs`, exercising the actual Service Worker fetch handler in a VM. It verifies that offline asset recovery prefers the highest numeric *older* cache version even when CacheStorage lists keys out of order, and ignores future or malformed cache names. No application code, Service Worker code, questions, identifiers, backup formats, or AsyncStorage keys changed.

## Results
- New regression: 2/2 assertions/scenarios passed.
- All Node regression suites: 34/34 passed.
- Question bank: 506 (grade 3: 267, grade 2: 137, grade 1: 102); 0 structural errors, 0 warnings.
- Question catalog: 506/506 synchronized.
- Japanese UTF-8/Unicode audit: 0 issues in audited files.
- Manifest/icon audit: 0 errors; PWA static release gate: PASS.
- `node --check public/sw.js`: PASS.
- Python audit test suites for manifest, catalog, Unicode: 5/5 each.
- TypeScript check attempted with globally installed `tsc`; failed because project dependencies and tsconfig are absent (React modules unresolved, JSX config missing). Not a validated project type-check.
- Expo Web export not run: `node_modules` absent. Real browser offline/restore and iOS/Android tests not run.

## Provenance and compatibility
All 506 questions remain `original / draft_review` and are not official exam past questions. This release adds no new question content. The original learning-data schema and runtime code are unchanged. The new tests do not prove actual device cache retention.

## Windows / Netlify deployment
1. Back up existing local learning data as JSON before deploying or testing restore.
2. In PowerShell from the extracted project root: `npm.cmd install`, `python scripts/validate_bank.py`, `node scripts/test_sw_previous_cache_order_v91.cjs`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`.
3. Test in a separate browser profile: installation, online first load, offline relaunch, refresh persistence, and JSON export/restore; check iOS/Android separately.
4. If acceptance succeeds, manually deploy the generated `dist` folder to the *existing* Netlify site. No live deployment was performed in this run.

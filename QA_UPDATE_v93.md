# QA update v93 — Service Worker initial asset discovery regression

## Baseline
Continued from the v92 full project ZIP and its QA history. This is 食のまなびノート, not FE Mate AI. The baseline includes 506 questions and 34 Node test suites.

## Change
Added `scripts/test_sw_html_asset_discovery_v93.cjs`, an executable behavioral test of the actual `public/sw.js` installation handler. The test models an HTML app shell containing local Expo JS/CSS, an external script, a private API path, a query-bearing URL, a non-script extension, a private-cache response and a server-error response. It verifies that eligible JS/CSS are pre-cached, rejected paths are not fetched, and private/failed assets are not cached. No production code was changed.

## Verification in this run
- New Service Worker asset discovery regression: 4/4 assertions groups passed.
- Node regression suites: 35/35 passed (34 historical plus one new).
- Question bank: 506; grade 3=267, grade 2=137, grade 1=102; 0 errors / 0 warnings.
- Catalog sync: 506/506, 0 errors.
- Japanese Unicode audit: 506 entries / 4 files, 0 issues.
- PWA release static gate: PASS; manifest/PNG audit: 0 errors; `node --check public/sw.js`: PASS.
- TypeScript attempted using `npx --no-install tsc --noEmit`, but failed because node_modules is absent; missing React types and JSX settings reflect missing project toolchain, not a confirmed production regression.
- Expo Web build not executed because dependencies are absent.
- Real browser, iOS, Android, offline installation and backup restore not exercised.

## Provenance / compatibility
No questions, IDs, answers, storage keys, backup schema, app behavior, Service Worker, or production manifest changed. All 506 items remain original `draft_review` exercises, not official past exam questions. Local learning data format remains compatible.

## Windows / Netlify
1. Back up existing learning data via JSON export before any restore tests or deployment.
2. Extract project; in PowerShell run `npm.cmd install`, `python scripts/validate_bank.py`, `node scripts/test_sw_html_asset_discovery_v93.cjs`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`.
3. Test with a separate browser profile: refresh persistence, export/import/rollback, first offline launch, PWA installation and mobile Safari/Chrome.
4. Only after successful acceptance, manually deploy the generated `dist` to the original Netlify site. No online deployment or live data modification occurred in this run.

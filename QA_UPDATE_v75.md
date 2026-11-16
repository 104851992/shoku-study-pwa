# QA UPDATE v75 — 2026-11-14

Baseline: v74 complete source, all historical QA updates and 500-question bank. Scope: 食のまなびノート only.

## Code change
- Service worker cache version advanced from v19 to v20.
- For a server 5xx response on a static asset (JS/CSS/images/fonts), attempt an exact-URL cache fallback from current and retained prior release caches. Never serve the HTML app shell in place of a missing JS/CSS file; if no exact cached asset exists, return the original 5xx response. Previously only navigation requests recovered from HTTP 5xx; static assets recovered only from thrown network errors.
- Added `scripts/test_sw_asset_5xx_v75.cjs` (4 scenarios: cached 503, uncached 503, cached 404, cached 200).
- Updated cache-version fixtures in three older tests (`test_cache_order_v50.cjs`, `test_offline_upgrade_v48.cjs`, `test_previous_assets_v49.cjs`) to test the new v20 release, without weakening expected cache-retention behavior.
- No question content, IDs, backup format, AsyncStorage keys, or application state logic changed.

## Verification
- All 22 `scripts/test_*.cjs` test suites PASS after fixture updates (initial run exposed three version-hardcoded fixture failures; corrected and rerun).
- New 5xx fallback test 4/4 PASS.
- `node --check public/sw.js`: PASS.
- `python scripts/validate_bank.py`: 500 questions (3級265, 2級135, 1級100); 0 errors, 0 warnings.
- `python scripts/check_pwa_release_v74.py`: PASS.
- `npm install --ignore-scripts --no-audit --no-fund --prefer-offline`: attempted but timed out; no node_modules available. Therefore TypeScript project validation and Expo Web build NOT RUN.
- Real-browser install/offline and iOS/Android device tests NOT RUN.

## Limitations and next steps
- Exact-URL cache fallback only helps assets previously fetched and cached. Fresh installs may still lack a complete offline asset graph. A 404 remains a 404 rather than serving potentially obsolete assets.
- Existing Service Worker caches are versioned, but browser cache eviction and cross-version asset compatibility still require live-browser testing.
- All 500 questions remain `source=original`, `reviewStatus=draft_review`; no verified official questions or new questions were added.
- On Windows: extract ZIP; run `npm.cmd install`, `python scripts/validate_bank.py`, `python scripts/check_pwa_release_v74.py`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`. In a disposable browser profile, test backup/restore/reset, reload, PWA installation and offline restart including simulated server 503 for cached JS. Confirm Japanese text and data compatibility. Only then manually deploy `dist` to existing Netlify site. No live deployment or user-data modification occurred in this run.

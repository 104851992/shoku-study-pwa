# 食のまなびノート v1.0.37 / QA UPDATE v47

## Baseline
Based on complete v1.0.36 ZIP (v46), including 500-question catalog and previous QA reports. FE Mate AI unchanged.

## Change
When an online navigation receives HTTP 500–599, the Service Worker now tries the previously validated cached '/' shell. HTTP 5xx is a successful fetch at the transport level, so the earlier network-error catch did not handle it. If no shell exists or Cache Storage is unavailable, the original 5xx response is returned. 4xx responses remain untouched. The existing response-header guards continue to prevent caching 5xx responses. Cache namespace rotated to v17; visible app version v1.0.37. No storage keys, question IDs, JSON schemas or answer logic changed.

## Verification
- Bank validator: 500 questions, grade 3=265, grade 2=135, grade 1=100, 0 errors, 0 warnings. All draft_review, NOT official past questions.
- 27 Python check scripts and 8 Node behavior scripts passed (35 scripts total).
- New navigation 5xx regression: 4/4 cases passed (503, 500, 404, denied Cache Storage).
- `node --check public/sw.js` passed.
- TypeScript and Expo Web build not run: project node_modules absent. No browser/iOS/Android real-device acceptance.

## Risks / manual steps
Offline shell requires a successful prior cache and cached JS assets. Netlify response headers may prevent precaching; test on the actual deployed domain. On Windows: `npm.cmd install`, `python scripts/validate_bank.py`, `node scripts/test_navigation_5xx_v47.cjs`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`. Verify old learning records, interrupted session, PWA install and offline relaunch; then manually deploy dist to Netlify. JSON restore, content review and device testing remain open. No live deployment performed.

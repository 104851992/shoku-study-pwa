# v1.0.19 — Offline cache navigation privacy hardening

## Changes
- Reviewed v1.0.18 full source, question bank and historical QA notes.
- The service worker now caches HTML navigation responses only for the app root `/`, not arbitrary same-origin routes. Network responses for other navigations still work online; offline navigations fall back to the cached root shell.
- Excludes responses with `Cache-Control: no-store` as well as `private`, and requests with `cache: no-store`.
- Bumped cache namespace to v3. No AsyncStorage keys, question IDs, or learning records changed.
- Updated prior static test expectations to match the stronger policy; added `scripts/check_offline_v29.py`.

## Verification
- Question bank: 3級 265, 2級 135, 1級 100; 0 structural errors and warnings. All 500 questions remain `draft_review`, not verified official past papers.
- All `scripts/check_*.py` passed, `node --check public/sw.js` passed, ZIP integrity checked.
- TypeScript and Expo Web export not executed: npm dependencies unavailable in this environment. Browser offline, native iOS/Android, and Netlify deployment not verified.

## Windows / Netlify acceptance
1. `npm.cmd install`
2. `python scripts/validate_bank.py` and `python scripts/check_offline_v29.py`
3. `npx.cmd tsc --noEmit`
4. `npx.cmd expo export --platform web`
5. Verify `dist/sw.js`, `dist/manifest.webmanifest`, icons; test online load, offline reload, answer saving and refresh persistence in Chrome/Edge, then test iOS/Android as available.
6. Deploy `dist` manually to Netlify only after checks pass. The online site has NOT been updated by this maintenance run.

## Remaining risks
- Service Worker is only statically checked; offline routing and stale caches need browser tests.
- One-click JSON restoration remains unimplemented. Export limits and historical record compatibility still need E2E tests.

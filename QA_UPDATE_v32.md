# v1.0.22 — Network-first caching must survive quota failures

## Change
Previous Service Worker awaited `cache.put` and eviction within the same outer `try` as `fetch`. A Cache Storage quota/security failure could therefore cause a successful online request to fall into the offline error handler and fail the page load. The optional cache-write and eviction steps now have their own guarded `try/catch`, preserving the already fetched network response. Cache namespace advanced from v5 to v6. Existing AsyncStorage keys, records, question IDs, answers and draft provenance remain unchanged.

## Validation
`python scripts/validate_bank.py`: 500 draft_review items (3級 265, 2級 135, 1級 100), 0 structural errors and warnings. `scripts/check_*.py` passed, including new `check_offline_v32.py`. `node --check public/sw.js` passed. These are static tests, not a real browser quota-failure simulation.

## Remaining risks
Service Worker install can still fail if an initial shell asset is unavailable; browser offline reload and quota-pressure behavior require manual testing. JSON one-click restore, mobile device verification, TypeScript and Expo Web build are unverified in this environment without npm dependencies. No official question verification was performed.

## Windows / Netlify
Run `npm.cmd install`, `python scripts/validate_bank.py`, `python scripts/check_offline_v32.py`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`. Verify `dist/sw.js`, `dist/manifest.webmanifest`, and icons; check online, offline reload, study record persistence, backup inspection, and cache quota behavior in browser. Deploy `dist` manually only after acceptance. Netlify was not updated.

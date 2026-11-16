# 食のまなびノート v1.0.34 / QA UPDATE v44

## Source and scope
Based on the complete v1.0.33 archive, including source, 500-question bank, and QA history. FE Mate AI untouched.

## Change
Service Worker now excludes responses with `Cache-Control: must-revalidate` from offline cache, in both install precache and runtime cache. Such responses cannot be served stale after expiry without successful origin validation. The former policy rejected `no-cache` but accepted `must-revalidate`; the latter could incorrectly be replayed after a network failure. Cache namespace v15 -> v16; displayed version v1.0.33 -> v1.0.34. Historical cache-control tests updated to reflect the new intentional policy, not removed.

## Validation
- Question bank structural validation: 500 questions, grade 3=265, grade 2=135, grade 1=100, 0 errors and 0 warnings.
- 25/25 Python regression scripts passed.
- New `test_sw_must_revalidate_v44.cjs`: 8/8 behavioral cases passed.
- Existing SW activation, precache, redirect, clear-site-data and lifecycle tests passed.
- `node --check public/sw.js` passed; ZIP CRC integrity checked.
- TypeScript, Expo Web build and real browsers/mobile devices not tested: npm dependencies absent in this environment.

## Compatibility and provenance
No question ID, answer, storage key, AsyncStorage schema, backup format, or answer logic changed. All 500 questions remain `draft_review`, original unverified practice material, NOT official exam questions. No new questions added.

## Risks and manual Windows / Netlify steps
Excluding `must-revalidate` may reduce offline cache coverage if Netlify applies this header to app shell/assets. In Windows PowerShell: `npm.cmd install`; `python scripts/validate_bank.py`; `node scripts/test_sw_must_revalidate_v44.cjs`; `npx.cmd tsc --noEmit`; `npx.cmd expo export --platform web`. Inspect `dist`, test PWA installation and offline restart, legacy learning record persistence and backup/restore, then manually deploy `dist` to Netlify. JSON one-click restore, content-by-content expert review, and iOS/Android device verification remain unfinished. **Netlify was not deployed.**

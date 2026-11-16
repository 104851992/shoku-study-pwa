# v1.0.24 — Service Worker install resilience

## Change
The previous install handler rejected the entire Service Worker installation when `caches.open` or the atomic `cache.addAll(SHELL)` failed. This could happen when an optional icon is unavailable or Cache Storage is blocked. The install handler now attempts atomic precaching, falls back to independently caching available shell resources on failure, and tolerates storage denial without blocking online navigation. Cache namespace rotated to v8; displayed app version updated. No AsyncStorage keys, backup schemas, question IDs, or grading logic changed.

## Limitations
Partial precache does **not** guarantee offline launch: the homepage and its JavaScript bundles must actually be cached. Browser offline tests and iOS/Android device tests remain outstanding. All 500 items remain `draft_review`, not verified official exam questions.

## Windows acceptance
Run `npm.cmd install`, `python scripts/validate_bank.py`, `python scripts/check_offline_v34.py`, `npx.cmd tsc --noEmit`, and `npx.cmd expo export --platform web`. Test SW installation with one shell icon returning 404, then confirm online navigation; verify offline reload after successful full online loading and progress persistence. Upload `dist` to Netlify only after local acceptance. No online deployment has been performed.

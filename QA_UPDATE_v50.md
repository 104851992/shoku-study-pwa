# 食のまなびノート v1.0.40 / QA UPDATE v50

## Baseline
Unpacked v1.0.39 ZIP and inspected source, bank, prior QA update and regression scripts. This is Shoku Study, not FE Mate AI.

## Fix
`CacheStorage.keys()` returns insertion order, which cannot be relied on to identify the most recent deployment. In v1.0.39, cleanup could keep an older cache and delete the latest previous cache; offline fallback could also pick the wrong release. `priorCacheNames` now filters to strictly older numeric versions and sorts descending. Activation retains the latest prior version and deletes only older versions; it does not delete future-version caches (important if an older worker activates after a newer one). Offline fallback also searches newest prior cache first. The existing cache namespace v19 is intentionally retained to preserve cached assets; the worker's changed script still triggers SW update checks. App display version updated to 1.0.40. Storage schema, question IDs and content are unchanged.

## Validation
- `python scripts/validate_bank.py`: 500 questions, 3級 265 / 2級 135 / 1級 100, 0 structural errors and warnings; all draft_review.
- 28/28 Python scripts passed; 11/11 Node scripts passed, including new `test_cache_order_v50.cjs`.
- `node --check public/sw.js` passed.
- TypeScript/Expo Web build not run because npm dependencies are not installed; no browser, Netlify or mobile real-device verification.

## Remaining risks
Offline fallback across differing hashed asset graphs may still be incomplete. JSON backup restore, historical progress roundtrip, real install/offline launch and item-by-item subject verification remain outstanding. Retaining a cache does not guarantee browser quota persistence.

## Windows deployment
From project root run `npm.cmd install`, `python scripts/validate_bank.py`, `node scripts/test_cache_order_v50.cjs`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`. Verify manifest, offline launch, saved progress and restore in browser; manually deploy `dist` to Netlify only after acceptance. Live Netlify site was not updated.

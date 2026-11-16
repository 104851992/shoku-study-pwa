# 食のまなびノート v1.0.39 / QA UPDATE v49

## Baseline and scope
Read and unpacked v1.0.38 complete ZIP, QA_UPDATE_v48, source, question bank and existing test scripts. Only Shoku Study modified, not FE Mate AI.

## Fix: interrupted PWA upgrades and hashed assets
v1.0.38 kept the previous cache only if the new shell was missing. This was insufficient: the new HTML may cache successfully while its versioned JavaScript/CSS fails, and deleting the previous cache can make offline recovery impossible. The v1.0.39 worker keeps one prior cache regardless of whether the new shell exists, removes older app caches, and searches the prior cache for exact same-origin static asset requests when network fetch fails. Existing response privacy guards, 120-entry per-cache limit, AsyncStorage schema, question IDs and answer logic are unchanged. Updated previous tests to reflect the intentionally revised retention policy.

## Tests
- `python scripts/validate_bank.py`: 500 questions (3級 265 / 2級 135 / 1級 100), 0 structural errors, 0 warnings; all `draft_review`, not official past exam questions.
- All Python scripts in scripts/ and all Node `.cjs` scripts passed, including new `test_previous_assets_v49.cjs` and updated v48 test.
- `node --check public/sw.js` passed. ZIP integrity checked after packaging.
- TypeScript and Expo Web build not run: npm dependencies are absent in this runtime. No actual Netlify/browser/iOS/Android tests performed.

## Remaining risks
Cache retention is limited to the latest two app cache namespaces by key insertion order; actual browser cache ordering, eviction, and version transitions must be verified on-device. If the new HTML loads but its new hashed assets were never cached, previous hashed assets alone cannot repair that new shell. Need offline install/upgrade tests, JSON backup restore, old-progress roundtrip, platform testing and item-by-item subject review.

## Windows and Netlify
From extracted project directory: `npm.cmd install`; `python scripts/validate_bank.py`; `node scripts/test_previous_assets_v49.cjs`; `npx.cmd tsc --noEmit`; `npx.cmd expo export --platform web`. Test PWA installation, offline cold launch and upgrade while offline, study record persistence and restore; only then manually upload `dist` to Netlify. This run did not update the live website.

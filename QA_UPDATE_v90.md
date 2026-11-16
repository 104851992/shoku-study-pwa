# QA update v90 — install icon/manifest integrity

## Baseline
Based on v89 full archive (506 questions, 33 Node regression suites, historical QA and catalog). No FE Mate AI files used.

## Changes
Added `scripts/check_manifest_assets_v90.py`, a dependency-free manifest and PNG header integrity gate checking actual icon dimensions against manifest metadata, mandatory icon sizes, safe icon paths, install root/scope, and Service Worker shell references. Added `scripts/test_manifest_assets_v90.py` with five positive/negative tests. No production app logic, learning data schema, question IDs, or Service Worker changed.

## Results
- Manifest/icon integrity: 0 errors; new tests 5/5 passed.
- Historical Node suites: 33/33 passed.
- Catalog synchronization: 506/506; 0 errors.
- Japanese UTF-8 audit: 0 findings.
- Question bank structure: 506 (3級 267, 2級 137, 1級 102), 0 errors / 0 warnings.
- PWA static gate and `node --check public/sw.js`: passed.
- TypeScript and Expo Web build: not run because dependencies are absent in this environment; no claim of build success.
- Actual browser install/offline and iOS/Android: not tested.

## Provenance / compatibility
All questions retain original/draft_review provenance and have not been independently verified as official exam items. No existing source data, storage keys, backup format, or question IDs changed.

## Windows / Netlify manual validation
Back up local study records before any upgrade. In PowerShell, run `npm.cmd install`, `python scripts/validate_bank.py`, `python scripts/check_manifest_assets_v90.py`, `python scripts/test_manifest_assets_v90.py`, `npx.cmd tsc --noEmit`, and `npx.cmd expo export --platform web`. In a separate browser profile, test PWA install, first offline launch after an online load, refresh persistence and JSON restore; test iOS/Android separately. Only after successful acceptance, manually deploy `dist` to the original Netlify site. This run did not deploy or modify the live site.

# QA UPDATE v77 — 2026-11-14

Baseline: complete v76 archive, question bank, SW and QA history. Scope: 食のまなびノート only.

## Changes
- On Service Worker installation, parse the verified cached HTML shell and prefetch up to 40 same-origin Expo `/ _expo/static/` (without space) or `/assets/` JavaScript/CSS resources referenced in script/link tags. Exact allowed paths are `/_expo/static/` and `/assets/`.
- Reject cross-origin URLs, query strings, non-JS/CSS paths, redirects, failed responses, mismatched MIME, sensitive headers and restrictive cache directives. Best-effort caching never prevents installation.
- Bumped offline cache v20 -> v21, updated cache-version fixtures and corrected the older-cache fallback fixture to actually omit the current shell.
- No change to question IDs, question content, storage keys, JSON backup schema, or app logic.

## Tests executed
- 24/24 Node test suites passed (including new install-asset discovery regression).
- `python scripts/validate_bank.py`: 500 total; grade 3:265, grade 2:135, grade 1:100; 0 structural errors/warnings.
- `python scripts/check_pwa_release_v74.py`: PASS.
- `node --check public/sw.js`: PASS.
- TypeScript and Expo Web build: not run, Expo dependencies not installed in this environment.
- Real browser offline/install, JSON restore and iOS/Android: not verified.

## Risks
- HTML may reference assets outside the two allowlisted directories or load additional chunks dynamically; initial offline readiness remains best-effort.
- Offline cache can be denied/evicted, and install-time fetch can fail. Native apps do not use this SW.
- All 500 items are original draft-review exercises, not verified official past questions.

## Windows / Netlify
1. Extract archive into a new folder. Export existing learning records to JSON before any deployment.
2. Run `npm.cmd install`, `python scripts/validate_bank.py`, `node scripts/test_install_asset_precache_v77.cjs`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`.
3. In a disposable browser profile, install the PWA, load it once, disconnect network, restart, and verify quiz, Japanese text, backup/restore and persistence; test Android/iOS separately.
4. Only after acceptance, manually upload `dist` to the existing Netlify site. No deployment or online learning data modification was performed.

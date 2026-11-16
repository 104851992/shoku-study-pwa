# QA UPDATE v79 — 2026-11-14

Baseline: v78 complete source archive and historical QA reports, 500-question bank and 25 Node test suites. Scope: 食のまなびノート only.

## Changes
- Added `scripts/test_sw_cache_resilience_v79.cjs`, exercising actual Service Worker code under a mocked Cache Storage environment.
- Three cases: denied Cache Storage open does not break a successful online asset response; quota failure on cache.put does not break that response; eviction of 121 entries removes an optional asset, not the four critical offline shell files.
- No production code, question IDs, AsyncStorage keys, backup JSON schema or SW cache version changed. This is a test-only QA release.

## Validation
- New resilience tests: 3/3 passed.
- All historical 25 Node `.cjs` test suites passed; total 26 suites with v79.
- Bank validator: 500 questions, grade 3 265 / grade 2 135 / grade 1 100; 0 errors and 0 warnings.
- PWA static release gate: passed; `node --check public/sw.js`: passed.
- TypeScript: attempted without dependencies; fails because React/Expo types and TypeScript project dependencies are absent. This is not a confirmed source-code defect.
- Expo Web build: attempted, timed out; no build success claimed.
- Real browser, iOS and Android: not tested.

## Content classification
All 500 questions remain original `draft_review` exercises. Structural validation does not establish factual accuracy. No official past examination questions have been verified or claimed.

## Risks and manual Windows / Netlify release
- Cache Storage may be denied/evicted; offline first-install completeness and dynamic chunks remain unverified.
- Simulated quota/eviction tests are not substitutes for browser, Android or iOS tests.
- On Windows, unzip into a new directory; export and separately retain a JSON backup of learning records; run `npm.cmd install`, `python scripts/validate_bank.py`, `node scripts/test_sw_cache_resilience_v79.cjs`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`.
- Test backup/restore in a disposable browser profile, offline install and restart, and learning progress persistence before manually deploying the generated `dist` directory to the existing Netlify site.
- No Netlify deployment performed; no live learning records changed.

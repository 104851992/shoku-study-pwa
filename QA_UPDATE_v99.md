# QA update v99 — Invalid JSON restore input protection

## Baseline
Continued from the full v98 archive, its 506-question bank, QUESTION_CATALOG.csv, and QA_UPDATE_v98.md. This is 食のまなびノート, not FE Mate AI.

## Change
Added `scripts/test_restore_invalid_input_v99.cjs`, running the real TypeScript backup validator and restore function with a mocked storage adapter. Ten malformed restore inputs are rejected before any storage reads or writes: null, empty payload, version mismatch, invalid calendar timestamp, malformed JSON, negative daily goal, impossible day, invalid attempt counts, duplicate draft IDs, and invalid history timestamp. Test-only addition; no runtime code, IDs, storage keys, backup format, question content, manifest or service worker changed.

## Verification (2026-11-15 JST)
- New invalid-input cases: **10/10 passed**.
- All Node `.cjs` suites: **41/41 passed**.
- Bank structure: **506 questions (3級267 / 2級137 / 1級102), 0 errors, 0 warnings**.
- Bank/catalog sync: **506/506, 0 errors**.
- Manifest and icon integrity: **0 errors**.
- Service Worker JavaScript syntax: **passed**.
- Full TypeScript check attempted: **blocked by missing project dependencies** (React, React Native and inherited Expo configuration); not a passing build.
- Expo Web export, actual browser offline and persistence, iOS/Android: **not verified**.
- ZIP integrity verified after packaging.

## Content provenance
All 506 questions remain original `draft_review` exercises, not independently verified official exam questions. No new questions were added in this run.

## Risks / manual Windows and Netlify steps
Mocked storage tests do not guarantee atomicity under power loss, browser storage eviction or concurrent autosave. On Windows, unpack to a separate directory; run `npm.cmd install`, `node scripts/test_restore_invalid_input_v99.cjs`, `python scripts/validate_bank.py`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`. Before deploying, export and independently save existing learning records; test import/export, refresh persistence, offline startup and mobile layouts in a disposable browser profile. Deploy generated `dist` manually to the existing Netlify site only after acceptance. No live deployment or live user-data modification was performed.

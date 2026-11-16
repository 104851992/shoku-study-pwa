# QA update v101 — Session draft corruption safety

## Baseline and scope
Continued from the complete v100 source archive, 506-question bank, question catalog, and historical QA reports. This is 食のまなびノート, not FE Mate AI.

## Change
Added `scripts/test_draft_corruption_guard_v101.cjs` exercising the actual TypeScript session-draft loader with an in-memory AsyncStorage mock. Ten checks cover malformed JSON, null payload, duplicate IDs, invalid index, inconsistent counters, boolean counter, incorrect response truth, unknown question, valid draft, and storage read failure. Invalid drafts are rejected without writes or replacement. The storage read exception is propagated rather than misrepresented as a new empty draft. No runtime code, storage keys, question IDs, or backup format changed.

## Verification (2026-11-15 JST)
- New session draft cases: 10/10 passed.
- Node .cjs regression suites: 43/43 passed.
- Question bank structural validation: 506 total (grade 3: 267; grade 2: 137; grade 1: 102), 0 errors, 0 warnings.
- Service Worker syntax: passed (`node --check public/sw.js`).
- Full TypeScript compilation: attempted, blocked by unavailable project dependencies / Expo tsconfig. Not passed.
- Expo Web export and physical Web/iOS/Android tests: not completed.
- All questions remain original draft_review material, not verified official past questions. No new questions added.

## Risks and deployment
Draft rejection is safe but may require manual recovery from a backup; no actual device/browser storage test was performed. Browser eviction, autosave races, offline-first launch and restore/download on real devices remain unverified. On Windows unpack separately, run `npm.cmd install`, `node scripts/test_draft_corruption_guard_v101.cjs`, `python scripts/validate_bank.py`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`. Back up learning data independently, test in a disposable browser profile, and only then manually deploy `dist` to the existing Netlify site. No Netlify deployment or live data modification occurred.

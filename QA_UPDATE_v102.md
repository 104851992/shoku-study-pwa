# QA update v102 — Saved progress corruption regression

## Baseline
Continued from the complete v101 archive, including source, 506 questions, previous tests, and QA reports. Project: 食のまなびノート, not FE Mate AI.

## Changes
Added `scripts/test_progress_corruption_guard_v102.cjs`, which transpiles and runs the actual `src/lib/progress.ts` loader with an in-memory AsyncStorage mock. Covers 11 malformed payloads (JSON, top-level type, answer/day counters and shapes, calendar dates, favorites, exam history, goal, first date), a valid payload, absent storage, and read errors. Checks that invalid data are not overwritten. No runtime code, question IDs, AsyncStorage keys, or backup schema changed.

## Verification (2026-11-15 JST)
- New progress-loader scenarios: 14/14 passed.
- Node test suites: 44/44 passed.
- Bank validator: 506 questions (grade 3: 267, grade 2: 137, grade 1: 102), 0 errors, 0 warnings.
- Service Worker syntax: passed.
- TypeScript full project: attempted; missing installed Expo/React dependencies and JSX configuration inherited from Expo prevent meaningful compile; NOT passed.
- Web export: not performed because project dependencies are unavailable.
- Browser, iOS, Android and actual offline/install/storage tests: not performed.
- All questions remain original `draft_review`, not official past papers or professionally verified material.

## Remaining risks and manual Windows deployment
A mock storage test does not establish actual browser persistence, simultaneous writes, recovery from storage eviction, or physical-device compatibility. On Windows: unpack the ZIP, run `npm.cmd install`, `node scripts/test_progress_corruption_guard_v102.cjs`, `python scripts/validate_bank.py`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`. Back up existing learning data before testing restoration in a disposable browser profile; verify refresh persistence, installation, offline first launch and restore before manually uploading `dist` to the existing Netlify site. No live deployment or user data changes occurred.

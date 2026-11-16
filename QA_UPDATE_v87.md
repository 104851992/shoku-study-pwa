# QA UPDATE v87 — 2026-11-14

Baseline: v86 full source, 506-item bank, QA history. Scope: 食のまなびノート only.

## Finding and correction
Prior v85/v86 QA notes inaccurately claimed the restore UI was disabled. Source inspection confirms `src/AppRoot.tsx` already renders a Web-only restore button and wires it to `restoreBackupOnWeb`, which requires explicit `window.confirm`, suspends autosaves, drains queued writes, calls the validated restore service and reloads after success. This is a **source-level observation**, not a browser acceptance test. Do not assume restore is safe on real devices until tested. Native restore remains unsupported.

## Changes
- Corrected two outdated comments in `src/lib/backup.ts` to match actual UI wiring. No runtime logic changed.
- Added `scripts/test_restore_ui_wiring_v87.cjs` with six source-level regression checks for Web restore action, settings button, confirmation order, save locking/draining, service validation and outdated comment removal.
- No storage keys, backup schema, question IDs, question content, service worker or business behavior changed.

## Verification
- New restore UI wiring tests: 6/6 PASS.
- All Node test suites: 33/33 PASS.
- Question structure: 506 total (grade 3: 267; grade 2: 137; grade 1: 102); 0 errors, 0 warnings.
- PWA static release gate: PASS.
- `node --check public/sw.js`: PASS.
- Global `tsc --noEmit`: attempted, BLOCKED by missing Expo/React project dependencies; errors include missing expo tsconfig base, JSX config and React modules. Not a passing typecheck.
- Expo Web export: NOT RUN; dependencies unavailable.
- Real browser, iOS, Android, and Netlify: NOT TESTED.
- All 506 questions remain original draft_review, not official exam questions. No editorial review performed.

## Risks and deployment
The Web restore button is actually enabled in source. This increases the importance of real-browser backup/restore testing in a disposable profile. Before any release, independently export and retain existing local data, test restore and refresh persistence, offline install and mobile layout. On Windows run `npm.cmd install`, `python scripts/validate_bank.py`, `node scripts/test_restore_ui_wiring_v87.cjs`, `npx.cmd tsc --noEmit`, and `npx.cmd expo export --platform web`. Only manually deploy `dist` to the existing Netlify site after successful acceptance. No online deployment or existing live data changes occurred.

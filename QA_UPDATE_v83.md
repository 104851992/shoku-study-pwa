# QA UPDATE v83 — 2026-11-14

Baseline: v82 full archive, 506-question catalog, historical QA reports and regression scripts. This update concerns 食のまなびノート only.

## Changes
Added `scripts/test_restore_atomicity_v83.cjs`, a runtime regression exercising the **actual TypeScript** `restoreBackupAfterConfirmation` with a simulated AsyncStorage adapter. It checks successful restore, a thrown write error, and a silently dropped write. Both failure paths must preserve the original raw progress and draft records. No production logic, storage key, backup schema, question ID, Service Worker or manifest changes.

## Verification
- New restore atomicity regression: 3/3 scenarios PASS.
- All Node `scripts/test_*.cjs` suites: 29/29 PASS.
- `python scripts/validate_bank.py`: 506 questions (grade 3: 267, grade 2: 137, grade 1: 102), 0 errors / 0 warnings.
- `python scripts/check_pwa_release_v74.py`: PASS (static only).
- `node --check public/sw.js`: PASS.
- TypeScript full project check: attempted; project dependencies absent, so not a meaningful successful check.
- Expo Web build: not run; dependencies absent.
- Browser, iOS and Android: not tested.

## Risks and next steps
These mock-based tests cannot guarantee crash-atomic transactions, recovery after power loss, real browser storage persistence, or correct restore after app reload. Before deployment, independently export existing learning records, restore a copy in a disposable browser profile, verify offline installation and restart, and test on iOS and Android. The 506 questions are original `draft_review` exercises, NOT verified official past questions; editorial review is outstanding. Online Netlify deployment and live user data were not touched.

## Windows / Netlify
Extract the full archive to a fresh folder. Run `npm.cmd install`, `python scripts/validate_bank.py`, `python scripts/check_pwa_release_v74.py`, `node scripts/test_restore_atomicity_v83.cjs`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`. After backup, browser and mobile verification, manually deploy the generated `dist` to the existing Netlify site. Do not replace live files before acceptance.

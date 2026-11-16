# QA UPDATE v84 — 2026-11-14

Baseline: v83 complete archive, 506 questions, existing QA reports and test suites. Scope: 食のまなびノート only.

## Change
Added `scripts/test_restore_reject_invalid_v84.cjs`, an eight-scenario runtime regression using the actual TypeScript backup service. It checks malformed envelope versions, timestamps, empty records, invalid JSON, negative daily goals, invalid favorites, invalid drafts and array-valued progress. Every invalid payload must be rejected **before any AsyncStorage read or write**. No production source, Service Worker, manifest, storage keys, backup schema or question IDs changed.

## Results
- New invalid-restore preflight: 8/8 PASS.
- All `scripts/test_*.cjs` Node suites: 30/30 PASS.
- `python scripts/validate_bank.py`: 506 questions; grade 3 = 267, grade 2 = 137, grade 1 = 102; 0 errors / 0 warnings.
- `python scripts/check_pwa_release_v74.py`: PASS (static).
- `node --check public/sw.js`: PASS.
- TypeScript full check: attempted with global tsc; fails because project dependencies are not installed (React/React Native/Expo types and JSX configuration missing). Not a valid project build result.
- Expo Web export: not run; project dependencies absent.
- Browser, iOS, Android and Netlify: not tested/deployed.

## Risks
Mock tests do not establish crash-atomic restore, browser storage durability, complete offline availability or mobile behavior. All 506 questions are original `draft_review` exercises, not verified official past exam questions. Subject-matter editorial verification remains pending.

## Windows / Netlify
Extract to a new folder. In PowerShell run `npm.cmd install`, `python scripts/validate_bank.py`, `node scripts/test_restore_reject_invalid_v84.cjs`, `npx.cmd tsc --noEmit`, and `npx.cmd expo export --platform web`. Export a separate copy of existing learning data; test restore and reload in a disposable browser profile, PWA installation/offline launch and iOS/Android before manually deploying `dist` to the existing Netlify site. Online content and user data were not touched.

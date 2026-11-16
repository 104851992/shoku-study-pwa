# QA update v92 — question option validation hardening

## Baseline
Continued from v91 full project, including 506 questions, question catalog, historical QA notes and 34 Node regression suites. This is Shoku Study, not FE Mate AI.

## Changes
Strengthened `scripts/validate_bank.py` to reject blank/non-string multiple-choice options, whitespace-equivalent duplicate choices, boolean answer indices (Python bool is an int subclass), and blank/invalid explanations. Also rejects blank written sample answers. Added `scripts/test_bank_option_safety_v92.py`, mutation-testing four invalid cases against the actual validator using temporary files; production questions remain unchanged.

## Verification (this run)
- Bank validation: 506 questions; grade 3=267, grade 2=137, grade 1=102; 0 errors / 0 warnings.
- New validator mutation tests: 4/4 pass.
- Node regression suites: 34/34 pass.
- Catalog synchronization: 506/506 match.
- Japanese Unicode audit: 0 issues (4 audited files).
- PWA static release gate and manifest/icon audit: PASS.
- `node --check public/sw.js`: PASS.
- `npm install --offline --ignore-scripts`: FAILED (registry dependency @expo/metro-runtime absent from local npm cache). Therefore full project TypeScript and Expo Web export not executed; do not infer build success.
- Browser/iOS/Android tests: not executed.

## Provenance and compatibility
No questions, IDs, answers, app code, AsyncStorage keys, backup schema or Service Worker behavior were changed. All 506 items remain original/draft_review, not verified official past exam questions. New validation checks are development-time only; existing local learning data remains schema-compatible.

## Windows / Netlify steps
1. Back up current learning data as JSON before testing restore or deploying.
2. Extract the ZIP and run from the project root in PowerShell: `npm.cmd install`; `python scripts/validate_bank.py`; `python scripts/test_bank_option_safety_v92.py`; `npx.cmd tsc --noEmit`; `npx.cmd expo export --platform web`.
3. In a separate browser profile test persistence after refresh, JSON export/import and rollback, PWA installation and offline relaunch. Test iOS Safari and Android Chrome separately.
4. Only after acceptance, manually deploy the generated `dist` to the existing Netlify site. No live deployment was made.

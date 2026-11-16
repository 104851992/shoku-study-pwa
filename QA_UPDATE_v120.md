# QA update v120 — session resume boundary regression

## Baseline
Continued from the complete v119 archive and QA_UPDATE_v119.md. This is 食のまなびノート, not FE Mate AI. Existing production code, question IDs, storage keys, and backup schemas remain unchanged.

## Changes
Added `scripts/test_draft_resume_boundaries_v120.cjs` exercising the real TypeScript `loadDraft()` module with 14 scenarios: out-of-order responses, impossible answer indices, inconsistent correctness, cross-grade data, invalid timestamps and counters, duplicate answers, mismatched resume indices, three valid resumable states, and absent drafts. Invalid records are rejected without storage writes. This is an additional regression suite, not a claim of real-device persistence verification.

## Results
- New draft resume regression: 14/14 passed.
- All Node test scripts (`scripts/test_*.cjs`): 58/58 suites passed sequentially.
- Question structure: 506 questions; grade 3 = 267, grade 2 = 137, grade 1 = 102; 0 errors and 0 warnings.
- Catalog sync: 506/506, no errors.
- PNG chunk checks: 4/4; pixel decoding: 3/3; service worker JS syntax: passed.
- Full TypeScript: not passed; missing installed dependencies (react/react-native, Expo TS config), `npx --no-install tsc` reported module/JSX errors.
- Expo Web export: attempted but timed out / no completed build; not verified.
- No browser, iOS, Android, PWA offline/install, or Netlify live deployment tests.

## Provenance and compatibility
All 506 questions remain original draft-review exercises, not verified official past exam questions. No content additions or subject-matter verification this cycle. No production data migration or storage format changes; existing user data untouched.

## Windows deployment / risks
From the extracted project directory: `npm.cmd install`, `node scripts/test_draft_resume_boundaries_v120.cjs`, `python scripts/validate_bank.py`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`. Before deployment, export/backup learning data and test restart persistence, backup restoration, offline startup and mobile devices. Deploy the generated `dist` folder to Netlify manually only after successful acceptance. Netlify online content was not updated.

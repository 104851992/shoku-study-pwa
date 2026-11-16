# QA update v121 — session draft storage round-trip and failure isolation

## Baseline and scope
Continued from the complete v120 archive, `QA_UPDATE_v120.md`, application source, 506-question bank, and prior regression scripts. This is 食のまなびノート, not FE Mate AI.

## Change
Added `scripts/test_draft_storage_roundtrip_v121.cjs`, which transpiles and exercises the actual `src/lib/progress.ts` saveDraft/loadDraft/clearDraft functions against a controlled AsyncStorage adapter. Eight assertions cover empty storage, persisted JSON, round-trip recovery, failed writes retaining the prior draft, failed reads retaining the prior draft, failed removals retaining the prior draft, successful removal, and malformed JSON rejection without automatic deletion. No production code, storage keys, question IDs, or backup schema changed.

## Executed checks
- New draft storage round-trip: 8/8 passed.
- Node regression scripts: 59/59 suites passed (including v121).
- Question bank validator: 506 total (3級 267; 2級 137; 1級 102), 0 errors, 0 warnings.
- CSV catalog sync: 506/506, 0 errors.
- TypeScript project: attempted `npx --no-install tsc --noEmit`, failed due to missing project dependencies/types and JSX configuration inherited from uninstalled Expo environment. Not a successful build.
- Expo Web export: not completed; no browser/iOS/Android or offline acceptance test.

## Provenance, risk, and deployment
All 506 questions are original `draft_review` exercises, not verified official past questions. This cycle did not independently verify academic content. Simulated storage behavior does not prove physical-device persistence. The largest remaining risks are full TypeScript build, Web export, actual AsyncStorage durability, backup restore, PWA offline/install, and mobile compatibility.

On Windows PowerShell, extract the ZIP, change into `Shoku_Study_v10_PWA`, then run `npm.cmd install`, `node scripts/test_draft_storage_roundtrip_v121.cjs`, `python scripts/validate_bank.py`, `npx.cmd tsc --noEmit`, and `npx.cmd expo export --platform web`. Back up learning records and verify reload, restore, and offline behavior before manually deploying `dist` to Netlify. No Netlify deployment was performed; existing live user data was not modified.

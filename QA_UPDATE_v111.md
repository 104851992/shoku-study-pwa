# QA update v111 — question Unicode ambiguity guard

## Baseline
Continued from the full v110 source archive, including 506 questions, all historical QA reports and scripts. This project is 食のまなびノート, not FE Mate AI.

## Changes
Added `scripts/test_question_unicode_safety_v111.cjs` to detect invisible Unicode and bidirectional controls, ASCII control characters, and answer choices that become identical after Unicode NFKC normalization and whitespace/case folding. Five fixtures test both rejection and acceptance. The guard reads the actual shipped question bank without modifying questions, IDs, AsyncStorage keys, backup formats, app code or service worker.

## Verification (2026-11-15 JST)
- New guard: 5/5 fixtures, 506/506 bank questions passed.
- Node regression scripts: 53/53 passed (scripts/test_*.cjs).
- `python scripts/validate_bank.py`: 506 questions (3級 267; 2級 137; 1級 102), 0 structural errors and 0 warnings.
- `node --check public/sw.js`: passed.
- `npx --no-install tsc --noEmit`: failed due to missing installed dependencies/types; does not establish source correctness.
- Expo Web export not executed; no installed dependencies.
- Browser, iOS, Android, offline PWA and Netlify not tested/deployed.
- All questions remain original draft_review; none verified as official exam questions.

## Risks and release procedure
This guard does not validate nutrition facts, answer correctness or all Unicode confusables. Preserve a separate backup of browser learning data. On Windows run `npm.cmd install`, `node scripts/test_question_unicode_safety_v111.cjs`, `python scripts/validate_bank.py`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`. Test backup/restore, reload persistence, install/offline startup and mobile devices in a separate test profile before manually uploading `dist` to Netlify. No claim of online deployment or data migration.

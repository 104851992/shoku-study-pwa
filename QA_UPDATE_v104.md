# QA update v104 — Backup/progress validator parity

## Baseline
Continued from the v103 complete archive, including all prior QA notes, the 506-question bank, and 45 Node regression suites. This is 食のまなびノート, not FE Mate AI.

## Change
Added `scripts/test_backup_progress_consistency_v104.cjs`, testing the production TypeScript backup validator against the production TypeScript progress loader with mocked AsyncStorage. Ten cases cover minimal legacy saves, current saves, counters, special IDs, retired history, and malformed dates/counters/favorites/daily data/history. The validators agree in all ten cases. No production code, storage keys, question IDs or backup schema were changed.

## Verification (2026-11-15 JST)
- New scenarios: 10/10 passed.
- Node regression suites: 46/46 passed.
- Question bank: 506 (grade 3: 267, grade 2: 137, grade 1: 102); 0 structural errors, 0 warnings.
- Full TypeScript attempted but failed because project dependencies are not installed (missing React/React Native modules and TS config context); not a successful type check.
- Expo Web export attempted but could not complete in the execution window without installed dependencies; not a successful build.
- Real browser/iOS/Android and offline installation not verified.
- All questions remain original `draft_review` practice material; no official questions or subject-matter review claimed.

## Risks and manual deployment
Mocked storage cannot prove browser/device persistence. On Windows, unpack and run `npm.cmd install`, `node scripts/test_backup_progress_consistency_v104.cjs`, `python scripts/validate_bank.py`, `npx.cmd tsc --noEmit`, and `npx.cmd expo export --platform web`. Back up existing learning data before testing. In a disposable browser profile, verify progress survives refresh, JSON export/restore, PWA installation and offline restart. Only after acceptance, manually deploy `dist` to the existing Netlify site. No Netlify deployment or user data mutation occurred in this run.

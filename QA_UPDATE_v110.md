# QA update v110 — Japanese text integrity regression

## Baseline and scope
Continued from the v109 complete archive, including all prior source, question bank, and QA reports. This is 食のまなびノート, not FE Mate AI.

## Changes
Added `scripts/test_japanese_text_integrity_v110.cjs`, a read-only strict UTF-8 and text-corruption guard for nine shipped source/data/PWA text files. It rejects malformed UTF-8, replacement characters, unexpected C0 control characters, and a narrow repeated Japanese mojibake signature. Five self-checks demonstrate detection and correct Japanese acceptance. It also checks that the question bank contains Japanese nutrition-related text. This is a regression guard, not a full linguistic or nutrition correctness review. No production code, question IDs, storage keys, or backup formats changed.

## Verification (2026-11-15 JST)
- New text-integrity checks: 15/15 passed (5 self-checks, 9 file checks, 1 bank-content check).
- Node regression suites: 52/52 passed.
- `python scripts/validate_bank.py`: 506 total (3級 267, 2級 137, 1級 102), 0 structural errors, 0 warnings.
- `node --check public/sw.js`: passed.
- `npx --no-install tsc --noEmit`: failed because project dependencies are absent; missing React types and JSX configuration errors were observed. Not a verified source-code defect.
- Expo Web export: not run (project dependencies absent).
- Browser, iOS/Android and Netlify: not tested/deployed.
- All questions remain `source=original`, `reviewStatus=draft_review`; no official exam questions were claimed or subject-matter validated.

## Risks and manual release
The mojibake guard is heuristic; plausible-looking incorrect Japanese and semantic errors may escape detection. On Windows, first back up learning data, then run `npm.cmd install`, `node scripts/test_japanese_text_integrity_v110.cjs`, `python scripts/validate_bank.py`, `npx.cmd tsc --noEmit`, and `npx.cmd expo export --platform web`. Verify JSON backup/restore, reload persistence, offline PWA startup and mobile behavior in a separate test browser/profile before manually deploying `dist` to Netlify. Existing online learning data and production site have not been modified.

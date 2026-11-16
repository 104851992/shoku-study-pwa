# QA update v124 — 3級 500 original draft exercises

## Scope and provenance
- Based on the complete v123 *fixed* source tree (including its `backup.ts` type-check fix and compact quiz UI).
- Expanded **3級 from 267 to 500**, adding 233 original Japanese five-option exercises with explanations and stable new IDs `EXT-3-001` through `EXT-3-233`.
- Existing 506 questions (3級 267, 2級 137, 1級 102) were preserved **without changing original IDs, options, keyed answers, order, or explanations**.
- New 3級 categories: 体を育もう 60, 知を育もう 60, 徳を育もう 60, 才を育もう 53.
- Whole bank now 739 questions: 3級 500; 2級 137; 1級 102. CSV question catalog regenerated in UTF-8 with BOM.
- Based on the published 2026-2027 syllabus topics, **not copied or represented as official exam questions**. Official references: https://flanet.jp/juken/ and https://shoku-ad.jp/3q-content/ . The exam organizers did **not** review or endorse these questions.
- All original and new questions retain `source: original` and `reviewStatus: draft_review`. Count/structure checks **do not verify nutritional or regulatory accuracy**; a human subject-matter editorial pass is still required before marketing or publishing as verified study content.

## Content quality observations
- The “67” in the previous 3級 answer-position audit meant **67 of the original 267 questions were keyed to option 5**, not 67 faulty questions.
- The original catalogue includes at least two **category-accuracy review candidates**: `ORI-3-255` (消費期限 appears under 体 rather than 徳); `ORI-3-256` (保存方法 appears under 知 rather than 才). Their original identifiers and fields were deliberately left unchanged in this edition to avoid altering earlier study states without a dedicated review.
- Exact duplicate prompts in 3級: none. Some study concepts intentionally overlap across practice questions and must be reviewed by an editor for instructional variety.

## Validation performed
- `python scripts/validate_bank.py`: TOTAL 739; 3級 500; 2級 137; 1級 102; 0 structural errors; 0 structural warnings.
- `python scripts/test_catalog_sync_v115.py`: 739 CSV rows match 739 source questions; 0 errors.
- `python scripts/check_grade3_500_v124.py`: validates counts, stable extension ID format, original/draft flags.
- `node scripts/test_question_unicode_safety_v111.cjs`: checked 739 questions.
- Every `scripts/test_*.cjs` Node regression suite executed successfully (61 suites).
- `python scripts/test_bank_option_safety_v92.py`: 4/4 mutation scenarios passed.
- Full TypeScript/Expo Web build not independently run in this container because the Expo packages are not installed. Run guarded publisher to validate on Windows **before** a GitHub push.
- No GitHub push, Netlify deployment, real-device offline testing, or data migration was performed.

## Publication caveats
- `PUBLISH_v124_500Q.ps1` checks against the known v122 or v123 repository baseline; refuses to overwrite unknown later edits; performs TypeScript/Expo/Node and bank checks prior to committing.
- Do not run `npm audit fix --force` to “fix” old Expo transitive alerts; the current dependency audit requires a separate impact assessment.
- Back up learning data before a real-device update. The code does not change existing progress/backup storage format, but browser storage is origin-specific.

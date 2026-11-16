# QA UPDATE v82 — 2026-11-14

Baseline: v81 complete source archive, existing question catalog and QA history. Project: 食のまなびノート (not FE Mate AI).

## Changes
Added six **original draft** multiple-choice questions (two each for grades 3, 2, 1) about expiration labeling, storage labels, shopping to reduce food waste, cooling cooked food, preventing raw-meat cross-contamination, and water activity. IDs: ORI-3-255, ORI-3-256, ORI-2-079, ORI-2-080, ORI-1-097, ORI-1-098. Updated QUESTION_CATALOG.csv to match. Every new question is source=original and reviewStatus=draft_review. These are NOT verified official past questions; food-science/editorial expert review is pending. No claims of official verification.

## Verification performed
- python scripts/validate_bank.py: 506 questions, 3級 267, 2級 137, 1級 102 (89 choice, 13 written), 0 errors and 0 warnings.
- python scripts/check_pwa_release_v74.py: PASS (static only).
- node --check public/sw.js: PASS.
- All 28 existing scripts/test_*.cjs suites: PASS.
- TypeScript: attempted but could not validate due to missing installed project dependencies (missing React/Expo modules and JSX config resolution under global tsc).
- Expo Web export: attempted with a 12-second timeout; not completed. No build success claim.
- ZIP archive integrity: to be checked during packaging.

## Compatibility and risk
No changes to app logic, AsyncStorage keys, JSON backup format, existing question IDs, Service Worker, manifest, or caching. Existing data compatibility preserved by design, but browser/Android/iOS testing is still required. Six newly authored items need independent subject-matter and Japanese-language review before publication. Structural checks cannot prove factual accuracy. Offline installation, actual backup/restore, and persistence remain unverified on devices.

## Windows and Netlify
Extract to a fresh folder. Run `npm.cmd install`, `python scripts/validate_bank.py`, `python scripts/check_pwa_release_v74.py`, `npx.cmd tsc --noEmit`, and `npx.cmd expo export --platform web`. Before production, export learning records to JSON, verify restoration in a disposable browser profile, test first-load/offline/reload and mobile layouts, and editorially review all six new draft questions. Only then manually deploy `dist` to the existing Netlify site. No online deployment or online data modification was performed.

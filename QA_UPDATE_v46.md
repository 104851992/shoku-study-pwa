# 食のまなびノート v1.0.36 / QA UPDATE v46

## Baseline and scope
Started from the complete v1.0.35 archive with 500 draft questions, source, and QA history. FE Mate AI was not modified.

## Fix
The previous safe-map fix only covered loading existing progress. `freshProgress()` still created plain objects and React state updates spread safe maps back into ordinary objects, reintroducing inherited-property lookups for special IDs such as `constructor` or `__proto__`. New progress now uses null-prototype maps; recording answers and finalizing sessions preserve null-prototype maps via `Object.assign(Object.create(null), ...)`. Storage keys, JSON schema, question IDs and ordinary behavior are unchanged. Existing saved data is not migrated or cleared.

## Verification
- Question structure: 500 total (3級 265 / 2級 135 / 1級 100), zero errors and warnings.
- Historical 26 Python checks passed; new 5 static assertions passed.
- Historical Service Worker Node tests passed; new 5 runtime assertions passed.
- Service Worker JavaScript syntax passed.
- TypeScript and Expo web build not executed: npm dependencies absent. No browser, iOS or Android device testing.
- All questions remain `draft_review` (unverified original practice), not official past questions. No content changes.

## Remaining risks / manual acceptance
Run `npm.cmd install`, `python scripts/validate_bank.py`, `python scripts/check_safe_writes_v46.py`, `node scripts/test_safe_writes_v46.cjs`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web` in Windows. Verify normal and legacy learning records, interrupted sessions, PWA install and offline launch, and Netlify headers before manually deploying `dist`. JSON one-click restore, subject-matter review and device acceptance remain pending. No Netlify deployment was performed.

# QA update v103 — Legacy progress key safety

## Baseline
Continued from complete v102 source archive, 506-question bank, 44 Node regression suites and historical QA records. This is 食のまなびノート, not FE Mate AI.

## Change
Added `scripts/test_progress_special_ids_v103.cjs`, a six-scenario regression exercising the production TypeScript progress loader/saver with mocked AsyncStorage. It verifies special legacy answer IDs (`__proto__`, `constructor`, `toString`) are preserved in null-prototype dictionaries, do not pollute object prototypes, survive JSON save/reload, and that missing optional legacy fields and duplicate favorites remain compatible. This is a regression-only release: no application code, question IDs, storage keys, or backup format changed.

## Verification (2026-11-15 JST)
- New scenarios: 6/6 passed.
- Node suites: 45/45 passed.
- Question structure: 506 questions (grade 3: 267; grade 2: 137; grade 1: 102), 0 errors, 0 warnings.
- Service Worker JavaScript syntax: passed.
- Full TypeScript: attempted, blocked by missing project dependencies; not passed.
- Expo Web export: not performed because dependencies are not installed.
- Real browser, iOS, Android, install/offline/restore: not tested.
- All questions are original `draft_review` material; no official exam questions or subject-matter verification is claimed.

## Risks and Windows/Netlify instructions
The test uses mock AsyncStorage, not real browser/device persistence. Before deploying, back up existing learning data. In PowerShell: `npm.cmd install`; `node scripts/test_progress_special_ids_v103.cjs`; `python scripts/validate_bank.py`; `npx.cmd tsc --noEmit`; `npx.cmd expo export --platform web`. Verify progress survives refresh, JSON backup/restore, install and offline startup in a disposable browser profile; manually deploy the resulting `dist` only after acceptance. Netlify and users' existing online data were not modified.

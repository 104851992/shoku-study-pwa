# 食のまなびノート v1.0.35 / QA UPDATE v45

## Baseline
Continued from the complete v1.0.34 archive, including 500-question bank, historical QA reports, and regression scripts. FE Mate AI was not touched.

## Fix: safe dictionaries when reading old progress
`loadProgress` previously populated plain `{}` dictionaries with persisted question IDs. A key named `__proto__` can mutate the dictionary prototype rather than become a normal own property; a legacy/malformed record could therefore disappear from the in-memory result and subsequent autosave. Both `answers` and `days` are now allocated using `Object.create(null)`; the JSON storage schema, keys, field values, IDs and user-facing behavior remain unchanged. Existing valid IDs, including unusual property names, are retained as own entries. No migration or destructive rewrite is performed.

## Validation performed
- `python scripts/validate_bank.py`: 500 entries, 3級 265 / 2級 135 / 1級 100, 0 structural errors, 0 warnings.
- All 26 `check_*.py` regression scripts passed, including new `check_safe_maps_v45.py` (5 invariants).
- Existing `test_sw_*.cjs` suite executed without failures; `node --check public/sw.js` passed.
- TypeScript and Expo Web build **not run**: npm dependencies are not installed in the supplied source archive. Browser and iOS/Android physical tests not performed.

## Content provenance and risks
All 500 questions remain `draft_review` (unverified original practice), not official exam past questions. No question text or answer changed. Null-prototype dictionaries should be checked in a real React Native/Web environment, especially any third-party code that assumes `hasOwnProperty` is present on records; the current application uses normal lookup/enumeration and JSON serialization. JSON one-click restore remains unimplemented.

## Windows / Netlify manual verification
From the extracted project directory run `npm.cmd install`, `python scripts/validate_bank.py`, `python scripts/check_safe_maps_v45.py`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`. In a browser, verify old progress and interrupted session restore, backup export and read-only inspection, PWA install, offline restart, and Netlify cache headers. Deploy the generated `dist` manually only after acceptance. **No online Netlify deployment was performed.**

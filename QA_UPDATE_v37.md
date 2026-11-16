# v1.0.27 — Empty stored-record guard

## Baseline
Continued from v1.0.26 complete project and QA_UPDATE_v36.md. FE Mate AI untouched.

## Finding and fix
Both `loadProgress()` and `loadDraft()` treated any falsy storage value as an absent key. An existing key containing an empty string (`''`) was therefore silently treated as fresh progress or no interrupted session. On startup the normal autosave could overwrite or remove that corrupt original before the user could inspect it. Only `null` from AsyncStorage now denotes an absent key. An empty string goes through JSON validation, throws a read error, and the existing read-success guards prevent initial autosave. No key names, valid data formats, question IDs, or answer logic changed.

Updated the legacy v16 assertion to match the stricter guard, and added `scripts/check_empty_storage_v37.py`. This is a static regression check, not a real browser persistence test.

## Verification (2026-11-12)
- Question structure: 500 (3級 265, 2級 135, 1級 100), 0 errors and 0 warnings; all `draft_review`.
- 23 Python `check_*.py` scripts passed, including the new check.
- `node --check public/sw.js` passed; Service Worker activation simulation 3/3 passed.
- npm dependencies absent (`npm ls` reports unmet dependencies); TypeScript and Expo Web build not verified.
- Browser offline boot, actual AsyncStorage corruption recovery, iOS/Android devices not tested.

## Windows / Netlify handoff
Before replacing a deployment, export and save a JSON backup from the currently working app. In the extracted project directory run `npm.cmd install`, `python scripts/validate_bank.py`, `python scripts/check_empty_storage_v37.py`, `npx.cmd tsc --noEmit`, and `npx.cmd expo export --platform web`. Test with an existing valid saved record, an absent record, and an intentionally empty-string record in a disposable browser profile. Confirm backup inspection, PWA installation, offline reload, and data persistence before manually deploying `dist` to Netlify. No online deployment performed.

## Outstanding
JSON restore remains unimplemented; 500 original practice questions still require editorial review and must not be represented as official past questions. Full offline and device acceptance testing remains pending.

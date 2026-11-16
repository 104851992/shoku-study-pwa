# 食のまなびノート QA UPDATE v57

## Baseline
Based on the v56 full source ZIP, its QA report, current 500-question bank, and previous regression scripts. FE Mate AI untouched.

## Change
In `loadDraft()` and `validateBackupEnvelope()`, validate the semantics of saved draft responses against the actual question. Choice questions require a selected integer within option bounds and a correct flag matching the keyed answer; written questions require null selection (self-assessed correct flag remains allowed). This prevents an out-of-range selection or inconsistent answer from being restored or presented as a valid backup. The raw stored data is never overwritten when rejected. No keys, JSON schema, question IDs, or scoring routines changed. Display version remains 1.0.44; delivery number v57.

## Verification
- Bank structural validation: 500 questions (3級 265 / 2級 135 / 1級 100), zero errors/warnings.
- Static assertions for new guard presence: 8/8 passed (not equivalent to runtime unit tests).
- Eleven `scripts/test_*.cjs` Node tests: all exited successfully.
- `node --check public/sw.js`: passed.
- Historical Python check sweep: timed out; no full pass claimed.
- TypeScript/Expo web build: not run because npm dependencies are absent.
- Browser, iOS, Android, Netlify: not tested/deployed.

## Risk and follow-up
Older malformed drafts with inconsistent choice answers or invalid selected indexes will be rejected and preserved in storage; valid drafts remain compatible. A complete end-to-end test, JSON restore, content review, and offline/browser/device testing remain outstanding. All 500 questions are `source: original`, `reviewStatus: draft_review`, not verified official past questions.

## Windows / Netlify
Unzip to a separate directory. Back up any existing learning data before updating. Run `npm.cmd install`, `python scripts/validate_bank.py`, `npx.cmd tsc --noEmit`, and `npx.cmd expo export --platform web`. Test valid drafts, corrupt drafts, backups, PWA installation and offline reload in a browser. Only then manually deploy `dist` to Netlify. The live site has not been updated.

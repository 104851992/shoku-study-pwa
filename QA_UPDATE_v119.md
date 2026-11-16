# QA update v119 — calendar streak regression

## Baseline and scope
Continued from v118 complete source and QA_UPDATE_v118.md. This is 食のまなびノート, not FE Mate AI. Preserved all production source, question IDs, AsyncStorage keys, data schemas, and backup formats.

## Changes
Added `scripts/test_streak_calendar_v119.cjs`: nine real-module regression scenarios for `todayKey()` and `streak()` using controlled dates and time zones. Cases include today's study, yesterday grace, consecutive days, gaps, year rollover, leap day, zero-answer days, Tokyo near-midnight, and New York DST transition. No production behavior changed.

## Verification
- New calendar streak tests: 9/9 pass.
- Node regression suites: 57/57 pass after rerunning six suites that initially timed out under concurrent load (no assertion failures).
- Question bank validator: 506 total (3級 267, 2級 137, 1級 102), 0 errors, 0 warnings.
- CSV catalog: 506/506 synchronized.
- PNG pixel tests 3/3, chunk tests 4/4; service worker JS syntax pass.
- Full TypeScript and Expo Web export: not verified (project node_modules unavailable; previous runs report missing dependencies).
- No real browser, iOS/Android, PWA installation/offline, or Netlify deployment performed.

## Content provenance
All 506 questions remain original draft-review practice content, not verified official past questions. No substantive content review or new questions this cycle.

## Outstanding risks / Windows deployment
Install dependencies (`npm.cmd install`), run `node scripts/test_streak_calendar_v119.cjs`, `python scripts/validate_bank.py`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`. Back up learning data before testing, then verify save/restart, backup/restore, PWA offline and iOS/Android behavior on actual devices. Manually deploy `dist` to Netlify only after acceptance. Existing live site and user data were not changed.

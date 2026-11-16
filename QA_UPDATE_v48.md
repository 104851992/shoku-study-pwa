# 食のまなびノート v1.0.38 / QA UPDATE v48

## Baseline
Unpacked the full v1.0.37 ZIP and inspected its source, 500-question bank, prior QA report and tests. FE Mate AI unchanged.

## Fix
The previous activate handler deleted all old offline caches even when the new installation failed to cache '/'. That could destroy the only available offline home page during a failed deployment or restrictive response headers. Activation now retains previous app caches until the new cache contains '/'. Navigation on network failure or HTTP 5xx first checks the current cache, then older app-cache shells. Existing response-header privacy guards and app-only cache namespace remain unchanged. Cache version v18; visible version v1.0.38. No learning storage schema, answer logic, question IDs or content changed.

## Verification
- Bank: 500 (grade 3=265, grade 2=135, grade 1=100), 0 structural errors/warnings; all draft_review, not official questions.
- All existing Python scripts and Node .cjs scripts passed after updating brittle source-text assertions for the new fallback helper.
- New VM regression: new shell missing => old cache retained and used on HTTP 503; new shell present => old cache deleted and current shell used (2/2).
- node --check public/sw.js passed; ZIP integrity checked.
- TypeScript and Expo Web build unavailable without npm dependencies. No live browser, iOS, Android or Netlify deployment tests performed.

## Open risks / Windows deployment
Current Service Worker still depends on successfully cached JS/CSS assets; actual Netlify Cache-Control headers and offline startup require testing. JSON restore, end-to-end saved-record recovery and item-by-item content review remain open.

On Windows in the extracted project root: `npm.cmd install`, `python scripts/validate_bank.py`, `node scripts/test_offline_upgrade_v48.cjs`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`. Test fresh install, interrupted upgrade, offline launch, answer persistence and data recovery before manually deploying `dist` to Netlify. No online deployment was performed.

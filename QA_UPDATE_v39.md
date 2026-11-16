# v1.0.29 — Offline no-cache revalidation guard

## Baseline
Continued from complete v1.0.28 archive and QA_UPDATE_v38.md. Only 食のまなびノート changed; FE Mate AI untouched.

## Change
The runtime Service Worker previously allowed caching responses with `Cache-Control: no-cache`. Such responses can be stored by HTTP caches but must be revalidated before reuse; the offline fallback cannot revalidate. The runtime response guard now rejects `no-cache` including field-qualified syntax. Cache namespace rotated to v11 to retire old entries. Existing storage keys, study records, question IDs, and question content are unchanged.

## Caveat
Install-time `cache.addAll(SHELL)` does not inspect Cache-Control. This remains a privacy/revalidation risk if the server sends personalized or no-cache HTML; a later release should validate each shell response before precaching. Browser and mobile device testing remains necessary.

## Windows / Netlify
Back up learning progress first. Run `npm.cmd install`, `python scripts/validate_bank.py`, `python scripts/check_cache_revalidation_v39.py`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`; verify offline launch and persistence, then manually deploy `dist`. No live deployment performed.

## Content provenance
500 draft_review items (3級265 / 2級135 / 1級100), not verified official past questions. No questions added this release.

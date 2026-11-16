# QA update v116 — answer position bias audit

## Baseline
Continued from v115 complete archive, including 506 questions, catalog, and prior QA reports. Project is 食のまなびノート, not FE Mate AI.

## Change
Added read-only `scripts/audit_answer_distribution_v116.py` and generated `ANSWER_DISTRIBUTION_AUDIT_v116.md`. Found answer-position skew in 1級 choice questions: sixth option is keyed in 4/89 (4.5%), compared with 16.7% under a uniform distribution. This is a question-design quality risk, not evidence of incorrect answers. No automatic rekeying or shuffling: doing so could invalidate historical progress or introduce wrong answer keys.

## Checks executed
- Answer distribution audit: 493 choice and 13 written questions, report generated.
- Catalog sync: 506/506, 0 mismatches.
- Bank structural validator: 506, 0 errors, 0 warnings.
- Node regression scripts: 54/54 passed.
- Service worker syntax: passed.
- TypeScript / Expo Web build: not run (dependencies unavailable).
- Browser / iOS / Android / Netlify: not tested or deployed.

## Compatibility and risks
No app source, IDs, question text, answer keys, AsyncStorage keys, or backup format changed. All questions remain `source=original`, `reviewStatus=draft_review` and are not verified official exam questions. Statistical distribution does not validate nutrition knowledge. Actual browser persistence, backup restore, offline PWA and native compatibility still need hands-on testing.

## Windows and deployment
Back up learning data before changing deployments. In PowerShell run `npm.cmd install`, `python scripts/audit_answer_distribution_v116.py`, `python scripts/validate_bank.py`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`. Verify offline startup and saved progress / restore in browsers and mobile devices. Deploy `dist` manually to Netlify only after acceptance; no live update has occurred.

# v0.9 QA update (2026-11-11)

- Fixed progress restore crash for invalid JSON, JSON null, and JSON arrays.
- Rejects invalid daily goals and arrays in answers/days fields.
- No change to 500 questions or exam timing.
- Checks run: question catalog structural validator, JSON parsing, ZIP CRC.
- NOT run: npm install, TypeScript compiler, iPhone, EAS, TestFlight.
- Blocker: com.example.shokumanabi is a placeholder; replace before Apple submission.
- Next: actual TypeScript check, unit tests with mocked AsyncStorage, real 90-minute exam mode and device QA.

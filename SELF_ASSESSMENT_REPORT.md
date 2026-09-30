# Self-assessment — cart-starter

Submitted by: 24120061 — Lê Nguyễn Gia Huy

Total I claim: 100 / 100

| Criterion | Max | I claim | Evidence |
|---|---|---|---|
| Behaviour | 30 | 30 | `npm test` green; no external dependencies; used `Math.round` (returns number); `qty: 1.5`, `qty: 0`, `price: -1` all throw `RangeError`, see `src/cart.js` |
| Tests | 20 | 20 | 6 tests in `test/cart.test.js`; fully covers happy path, empty cart, free-shipping threshold, and all 3 error cases |
| Harness | 20 | 20 | `CLAUDE.md` added as project rules; working gate (`npm run gate`) runs both `npm run lint` and `npm test`; CI configured via GitHub Actions (`ci.yml`) on push |
| Brief | 15 | 15 | `brief.md` is detailed: outlines files, contract, error cases, and "no dependencies" rule |
| AI-LOG.md | 15 | 15 | Log written to document the interaction and corrections during development |

## What I did not manage
I initially focused on the implementation and happy path test. The edge case tests and project rules were added in a second iteration after reviewing the rubric. However, all requirements are now fully met.

## What I would do differently
Next time, I will create `CLAUDE.md` (the rules file) and write the edge case tests *before* asking the AI to implement the logic, following a stricter Test-Driven Development (TDD) approach. This would have saved time in fixing missed constraints.

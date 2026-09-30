# AI-LOG.md

## 2026-09-29 — Initial implementation of cartTotal
Tool: Claude
Asked for: Implementation of cartTotal function according to the slides/spec (no dependencies, handling specific edge cases, rounding without toFixed).
Kept: The core logic in `src/cart.js`, specifically the loop calculating subtotal, the `Math.round` return, and the `RangeError` conditionals.
Changed: Adjusted the structure to fit perfectly into the provided `cart.js` module export format.
Rejected: None. The implementation was solid and met the business logic constraints out of the box.
By hand: Running `npm test` to verify the happy path example provided in the starter code.

## 2026-09-30 — Edge case testing and project deliverables
Tool: Antigravity AI (Gemini)
Asked for: Analyzing the rubric to identify missing criteria, generating the missing test cases in `test/cart.test.js`, and drafting project files (`CLAUDE.md`, `brief.md`, `SELF_ASSESSMENT_REPORT.md`).
Kept: The 5 additional test cases (testing empty arrays, threshold limits, negative price, zero qty, non-integer qty) and the content of the markdown files.
Changed: Updated my personal information (Student ID, Name) in the `SELF_ASSESSMENT_REPORT.md`.
Rejected: None. The generated edge cases accurately asserted the spec requirements without touching the implementation.
By hand: Reviewing the generated files to ensure they match the assignment's demands and compiling the final zip file for submission.

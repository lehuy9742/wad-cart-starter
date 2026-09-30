# Project Rules

Welcome! If you are a new teammate joining on your first day, here is everything you need to know about our project:

## 1. Stack
- **Language**: Plain JavaScript (Node.js ES Modules).
- **Core Principle**: ZERO external dependencies. We do not install or use external libraries (no `jest`, no `lodash`, etc.).

## 2. Commands
- **Run the test suite**: `npm test` (uses Node's native `node:test` runner).
- **Check code syntax**: `npm run lint`
- **The Working Gate**: `npm run gate` (This runs both lint and tests. Always run this before pushing your code).

## 3. The "Nevers"
- **NEVER** use `.toFixed()`. It converts the result into a string, but our contract explicitly demands returning a **number** (đồng). Use `Math.round()` instead.
- **NEVER** silently ignore invalid inputs. If a `price` is negative, or if a `qty` is 0 or a non-integer, immediately throw a `RangeError`.
- **NEVER** add anything to `package.json` dependencies. Keep the repo entirely self-contained.

# Brief for AI Assistant

**Task:** Implement a shopping cart total calculation function.

**Files it may touch:**
- `src/cart.js` (for the main implementation)
- `test/cart.test.js` (for testing the edge cases)

**Constraints:**
- Use plain JavaScript.
- **No dependencies** (do not install or import external libraries).

**The Contract (Function Signature):**
- Function name: `cartTotal(items, options)`
- `items`: An array of objects `[{ name, price, qty }]`.
- `options`: An object `{ vatRate, freeShipFrom, shipFee }`.
- **Return value:** Must return a **number** (not a string), rounded to the nearest whole đồng.

**Calculation Logic:**
- `subtotal` = sum of `(price * qty)` for all items.
- `VAT` = `subtotal * vatRate`.
- `shipping` = `0` if `subtotal >= freeShipFrom`, otherwise `shipFee`.
- Total = `subtotal + VAT + shipping`.

**Error Cases & Edge Cases:**
- Empty cart (`items` is `[]`): return `0` (no VAT, no shipping).
- Negative `price`: throw a `RangeError`.
- `qty` is `0` or negative: throw a `RangeError`.
- `qty` is not a positive integer (e.g. `1.5`): throw a `RangeError`.

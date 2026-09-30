import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

// This test fails until you implement cartTotal. That is the point:
// run `npm test` first and see it red.
test('the example from the slides', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 467400)
})

test('empty cart returns 0', () => {
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal([], options), 0)
})

test('shipping fee is 0 when subtotal >= freeShipFrom', () => {
  const items = [
    { name: 'Giày', price: 500000, qty: 1 }
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  // Subtotal = 500000, VAT = 500000 * 0.08 = 40000, Shipping = 0
  assert.equal(cartTotal(items, options), 540000)
})

test('throws RangeError when price is negative', () => {
  const items = [{ name: 'Lỗi', price: -1, qty: 1 }]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.throws(() => cartTotal(items, options), RangeError)
})

test('throws RangeError when qty is 0', () => {
  const items = [{ name: 'Lỗi', price: 100000, qty: 0 }]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.throws(() => cartTotal(items, options), RangeError)
})

test('throws RangeError when qty is not an integer (e.g. 1.5)', () => {
  const items = [{ name: 'Lỗi', price: 100000, qty: 1.5 }]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.throws(() => cartTotal(items, options), RangeError)
})

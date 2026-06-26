import { calculateTotal } from './cart';

describe('Cart Calculation Unit Tests', () => {
  test('should return 0 when cart is empty', () => {
    expect(calculateTotal([])).toBe(0);
  });

  test('should correctly calculate total for a single item', () => {
    const cart = [{ price: 10, quantity: 2 }];
    expect(calculateTotal(cart)).toBe(20);
  });

  test('should correctly calculate total for multiple items', () => {
    const cart = [
      { price: 10, quantity: 2 },
      { price: 24.99, quantity: 1 }
    ];
    expect(calculateTotal(cart)).toBe(44.99);
  });
});
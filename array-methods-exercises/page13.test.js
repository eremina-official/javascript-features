import { smallestInteger } from './page13.js';

describe('smallestInteger', () => {
  test('returns 4', () => {
    const result = smallestInteger([2, 1, 6, 3]);
    expect(result).toBe(4);
  });

  test('returns 1', () => {
    const result = smallestInteger([6, 6, 6, 6]);
    expect(result).toBe(1);
  });

  test('returns 4', () => {
    const result = smallestInteger([3, 1, 2]);
    expect(result).toBe(4);
  });

  test('returns 1', () => {
    const result = smallestInteger([-1, -3, -2, -7]);
    expect(result).toBe(1);
  });
});

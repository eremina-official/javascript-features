import { pushValue } from './page24';


describe('pushValue', () => {
  test('returns correct index', () => {
    const result = pushValue([1, 2, 4, 5, 7, 8], 5);
    expect(result).toBe(4);
  });

  test('returns correct index', () => {
    const result = pushValue([4, 3, 2, 1], 2);
    expect(result).toBe(2);
  });

  test('returns correct index', () => {
    const result = pushValue([8, 8, 8, 8], 9);
    expect(result).toBe(4);
  });

  test('returns correct index', () => {
    const result = pushValue([8, 8, 8, 8], 6);
    expect(result).toBe(0);
  });

  test('returns correct index', () => {
    const result = pushValue([2, 3, 4, 5, 6, 7, 8], 1);
    expect(result).toBe(0);
  });
});

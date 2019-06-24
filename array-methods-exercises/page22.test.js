import { moveElement, generateArray, generateArrayRecursion } from './page22';


describe('moveElement', () => {
  test('returns correct result', () => {
    const result = moveElement([1, 2, 3, 4], 1, 3);
    expect(result).toEqual([1, 3, 4, 2]);
  });

  test('informs that element at given position does not exist', () => {
    const result = moveElement([1, 2, 3, 4], 6, 1);
    expect(result).toBe('There is no element with index 6 in the given array.');
  });
});


describe('generateArray', () => {
  test('returns correct result', () => {
    const result = generateArray(-3, 2);
    expect(result).toEqual([-3, -2, -1, 0, 1, 2]);
  });

  test('returns correct result', () => {
    const result = generateArray(3, -2);
    expect(result).toEqual([3, 2, 1, 0, -1, -2]);
  });
});

describe('generateArrayRecursion', () => {
  test('returns correct result', () => {
    const result = generateArrayRecursion(-3, 2);
    expect(result).toEqual([-3, -2, -1, 0, 1, 2]);
  });

  test('returns correct result', () => {
    const result = generateArrayRecursion(3, -2);
    expect(result).toEqual([3, 2, 1, 0, -1, -2]);
  });
});

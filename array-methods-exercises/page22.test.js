import { moveElement, generateArray, generateArrayRecursion, generateArrayV2 } from './page22';


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

describe('generateArrayV2', () => {
  test('returns correct result', () => {
    const result = generateArrayV2(3, 8);
    expect(result).toEqual([3, 4, 5, 6, 7, 8]);
  });

  test('returns correct result', () => {
    const result = generateArrayV2(3, -2);
    expect(result).toEqual([3, 2, 1, 0, -1, -2]);
  });

  test('returns correct result', () => {
    const result = generateArrayV2(-3, 2);
    expect(result).toEqual([-3, -2, -1, 0, 1, 2]);
  });

  test('returns correct result', () => {
    const result = generateArrayV2(-3, -2);
    expect(result).toEqual([-3, -2]);
  });
});

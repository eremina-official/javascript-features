import { getElementSum, sumAndProduct, sumIndices, sumIndicesTwo } from './page19';

describe('getElementsEqualToSum', () => {
  test('returns [1, 4]', () => {
    const result = getElementSum([3, 7, 6, 4, 2, 8], 7);
    expect(result).toHaveLength(2);
    expect(result).toContain(0);
    expect(result).toContain(3);
  });

  test('returns -1 if there is no two elements that sum up to a target number', () => {
    const result = getElementSum([7, 3, 8], 7);
    expect(result).toBe(-1);
  });

  test('does not sum up the same number', () => {
    const result = getElementSum([3, 2, 3], 4);
    expect(result).toBe(-1);
  });
});


describe('sumAndProduct', () => {
  test('returns correct sum and product', () => {
    const result = sumAndProduct([3, 7]);
    expect(result).toEqual({sum: 10, product: 21});
  });
});


describe('sumIndices', () => {
  test('returns [5, 7, 9, 7]', () => {
    const result = sumIndices([1, 2, 3], [4, 5, 6, 7]);
    expect(result).toEqual([5, 7, 9, 7]);
  });

  test('returns [6, 8, 9, 4]', () => {
    const result = sumIndices([1, 2, 2, 4], [5, 6, 7]);
    expect(result).toEqual([6, 8, 9, 4]);
  });
});

describe('sumIndicesTwo', () => {
  test('returns [5, 7, 9, 7]', () => {
    const result = sumIndicesTwo([1, 2, 3], [4, 5, 6, 7]);
    expect(result).toEqual([5, 7, 9, 7]);
  });

  test('returns [6, 8, 9, 4]', () => {
    const result = sumIndices([1, 2, 2, 4], [5, 6, 7]);
    expect(result).toEqual([6, 8, 9, 4]);
  });
});

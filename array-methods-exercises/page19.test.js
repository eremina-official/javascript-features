import { getElementSum } from './page19';

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
});

import { retrieveValues, 
         nthLargestElement, 
         nthLargestElementTwo, 
         nthLargestElementThree, 
         nthLargestElementFour} from './page18';

describe('retrieveValues', () => {
  test('returns values of a given data type', () => {
    const result = retrieveValues(['NaN', 1, 'c', true, 8, 4, 'b', 7, 'a'], 'number');
    expect(result).toHaveLength(4);
    expect(result).toContain(1);
    expect(result).toContain(8);
    expect(result).toContain(4);
    expect(result).toContain(7);
  });

  test('returns values of a given data type', () => {
    const result = retrieveValues(['NaN', 1, 'c', true, 8, 4, 'b', 7, 'a'], 'string');
    expect(result).toHaveLength(3);
    expect(result).toContain('a');
    expect(result).toContain('b');
    expect(result).toContain('c');
  });
});


describe('nthLargestElement', () => {
  test('returns nth largest element', () => {
    const result = nthLargestElement([7, 2, 4, 1, 14, 8, 18], 4);
    expect(result).toBe(7);
  });
});

describe('nthLargestElementTwo', () => {
  test('returns nth largest element', () => {
    const result = nthLargestElementTwo([7, 2, 4, 1, 14, 8, 18], 4);
    expect(result).toBe(7);
  });
});

describe('nthLargestElementThree', () => {
  test('returns nth largest element', () => {
    const result = nthLargestElementThree([7, 2, 4, 1, 14, 8, 18], 4);
    expect(result).toBe(7);
  });
});

describe('nthLargestElementFour', () => {
  test('returns nth largest element', () => {
    const result = nthLargestElementFour([7, 2, 4, 1, 14, 8, 18], 4);
    expect(result).toBe(7);
  });
});

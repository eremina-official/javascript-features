import { checkArray, arrayToString } from './page21.js';

describe('checkArray', () => {
  test('returns true when the input is an array', () => {
    const result = `Provided input is an array`;
    expect(checkArray(['a', 'b', 'c'])).toBe(result);
  });

  test('does not return false when the input is an array', () => {
    const result = `Provided input is not an array`;
    expect(checkArray(['a', 'b', 'c'])).not.toBe(result);
  });

  test('returns false when the input is not an array', () => {
    const result = `Provided input is not an array but string`;
    expect(checkArray('a, b, c')).toBe(result);
  });

  test('returns false when the input is not an array', () => {
    const result = `Provided input is not an array but object`;
    expect(checkArray({a: 'a'})).toBe(result);
  });
});

describe('arrayToString', () => {
  test('returns correct string', () => {
    const result = 'World+Wide+Web';
    expect(arrayToString(['World', 'Wide', 'Web'], '+')).toBe(result);
  });
});

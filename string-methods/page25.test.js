import { isString } from './page25.js';


describe('isString', () => {
  test('returns true if the input is a string', () => {
    const result = isString('It is a string');
    expect(result).toBe(true);
  });

  test('returns false if the input is an object', () => {
    const result = isString({});
    expect(result).toBe(false);
  });

  test('returns false if the input is a number', () => {
    const result = isString(1);
    expect(result).toBe(false);
  });

  test('returns false if the input is null', () => {
    const result = isString(null);
    expect(result).toBe(false);
  });
});

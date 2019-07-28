import { isString, isBlank } from './page25.js';


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


describe('isBlank', () => {
  test('returns false if the string is blank', () => {
    const result = isBlank('');
    expect(result).toBe(false);
  });

  test('returns true if the string is not blank', () => {
    const result = isBlank('It is a string');
    expect(result).toBe(true);
  });
});

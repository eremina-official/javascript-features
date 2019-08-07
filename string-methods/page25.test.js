import { isString, 
         isBlank, 
         parametrizeString, 
         capitalizeString, 
         makeOrdinalNumber } from './page25.js';


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


describe('parametrizeString', () => {
  test('returns parametrized string', () => {
    const result = parametrizeString('John Smith from Germany');
    expect(result).toBe('john-smith-from-germany');
  });

  test('accounts for multiple spaces', () => {
    const result = parametrizeString('John   Smith    from Germany');
    expect(result).toBe('john-smith-from-germany');
  });
});


describe('capitalizeString', () => {
  test('capitalizes first letter of each word', () => {
    const result = capitalizeString('Capitalize first letter of each word');
    expect(result).toBe('Capitalize First Letter Of Each Word');
  });
});


describe('makeOrdinalNumber', () => {
  test('makes number ordinal', () => {
    const result = makeOrdinalNumber(1);
    expect(result).toBe('1st');
  });

  test('makes number ordinal', () => {
    const result = makeOrdinalNumber(2);
    expect(result).toBe('2nd');
  });

  test('makes number ordinal', () => {
    const result = makeOrdinalNumber(3);
    expect(result).toBe('3rd');
  });

  test('makes number ordinal', () => {
    const result = makeOrdinalNumber(4);
    expect(result).toBe('4th');
  });

  test('makes number ordinal', () => {
    const result = makeOrdinalNumber(10);
    expect(result).toBe('10th');
  });

  test('makes number ordinal', () => {
    const result = makeOrdinalNumber(51);
    expect(result).toBe('51st');
  });

  test('makes number ordinal', () => {
    const result = makeOrdinalNumber(101);
    expect(result).toBe('101st');
  });

  test('accounts for exeptions', () => {
    const result = makeOrdinalNumber(1011);
    expect(result).toBe('1011th');
  });

  test('accounts for exeptions', () => {
    const result = makeOrdinalNumber(11);
    expect(result).toBe('11th');
  });
});

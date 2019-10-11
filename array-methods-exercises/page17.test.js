import { deleteDuplicatesPush, 
         deleteDuplicatesSort, 
         deleteDuplicatesReduce,
         unionOfTwoArrays,
         unionOfTwoArraysTwo,
         differenceOfTwoArrays, 
         differenceOfTwoArraysTwo,
         deleteDuplicatesObject } from './page17';

describe('deleteDuplicatesPush', () => {
  test('deletes numbers', () => {
    const testArray = [3, 3, 8, 6, 8, 8, 3, 4, 8];
    const resultArray = deleteDuplicatesPush(testArray);
    expect(resultArray).toHaveLength(4);
    expect(resultArray).toContain(3);
    expect(resultArray).toContain(4);
    expect(resultArray).toContain(6);
    expect(resultArray).toContain(8);
  });
});

describe('deleteDuplicatesSort', () => {
  test('deletes numbers', () => {
    const testArray = [3, 3, 8, 6, 8, 8, 3, 4, 8];
    const resultArray = deleteDuplicatesSort(testArray);
    expect(resultArray).toHaveLength(4);
    expect(resultArray).toContain(3);
    expect(resultArray).toContain(4);
    expect(resultArray).toContain(6);
    expect(resultArray).toContain(8);
  });
});

describe('deleteDuplicatesReduce', () => {
  test('deletes numbers', () => {
    const testArray = [3, 3, 8, 6, 8, 8, 3, 4, 8];
    const resultArray = deleteDuplicatesReduce(testArray);
    expect(resultArray).toHaveLength(4);
    expect(resultArray).toContain(3);
    expect(resultArray).toContain(4);
    expect(resultArray).toContain(6);
    expect(resultArray).toContain(8);
  });
});

describe('deleteDuplicatesObject', () => {
  test('deletes equal objects', () => {
    const testArray = [{c: 3}, {a: 1}, {b: 2}, {d: 4}, {a: 1}, {c: 3}, {a: 1}, {b: 2}];
    const getIdentifier = value => value;
    const result = deleteDuplicatesObject(testArray, getIdentifier);
    expect(result).toHaveLength(4);
    expect(result).toContainEqual({a: 1});
    expect(result).toContainEqual({b: 2});
    expect(result).toContainEqual({c: 3});
    expect(result).toContainEqual({d: 4});
  });

  test('deletes objects with selected equal fields', () => {
    const testArray = [
      {id: 3, c: 3}, 
      {id: 1, a: 1}, 
      {id: 1, b: 2}, 
      {id: 2, d: 4}, 
      {id: 1, a: 1}, 
      {id: 2, c: 3}, 
      {id: 1, a: 1}, 
      {id: 1, b: 2}
    ];
    const getIdentifier = value => value.id;
    const result = deleteDuplicatesObject(testArray, getIdentifier);
    expect(result).toHaveLength(3);
    expect(result).toContainEqual({id: 3, c: 3});
    expect(result).toContainEqual({id: 1, a: 1});
    expect(result).toContainEqual({id: 2, d: 4});
  });
});


describe('equalityTest', () => {
  test('test array', () => {
    const arrayone = [1, 2, 3];
    const arraytwo = [2, 1, 3];
    expect(arrayone).toEqual(arraytwo);
  });
  test('test object', () => {
    const objectone = {a: 1, b: 2};
    const objecttwo = {b: 2, a: 1};
    expect(objectone).toEqual(objecttwo);
  });
});


describe('unionOfTwoArrays', () => {
  test('returns correct result', () => {
    const result = unionOfTwoArrays([1, 2, 3], [7, 3, 6, 2]);
    expect(result).toHaveLength(2);
    expect(result).toContain(2);
    expect(result).toContain(3);
  });

  test('returns correct result', () => {
    const result = unionOfTwoArrays([7, 3, 6, 2, 5], [1, 3, 2, 7]);
    expect(result).toHaveLength(3);
    expect(result).toContain(2);
    expect(result).toContain(3);
    expect(result).toContain(7);
  });
});

describe('unionOfTwoArraysTwo', () => {
  test('returns correct result', () => {
    const result = unionOfTwoArraysTwo([1, 2, 3], [7, 3, 6, 2]);
    expect(result).toHaveLength(2);
    expect(result).toContain(2);
    expect(result).toContain(3);
  });

  test('returns correct result', () => {
    const result = unionOfTwoArraysTwo([7, 3, 6, 2, 5], [1, 3, 2, 7]);
    expect(result).toHaveLength(3);
    expect(result).toContain(2);
    expect(result).toContain(3);
    expect(result).toContain(7);
  });
});


describe('differenceOfTwoArrays', () => {
  test('returns correct result', () => {
    const result = differenceOfTwoArrays([1, 2, 4], [1, 6, 5, 2]);
    expect(result).toHaveLength(3);
    expect(result).toContain(4);
    expect(result).toContain(5);
    expect(result).toContain(6);
  });

  test('returns correct result', () => {
    const result = differenceOfTwoArrays([1, 6, 5, 2], [2, 4, 1]);
    expect(result).toHaveLength(3);
    expect(result).toContain(4);
    expect(result).toContain(5);
    expect(result).toContain(6);
  });
});

describe('differenceOfTwoArraysTwo', () => {
  test('returns correct result', () => {
    const result = differenceOfTwoArraysTwo([1, 2, 4], [1, 6, 5, 2]);
    expect(result).toHaveLength(3);
    expect(result).toContain(4);
    expect(result).toContain(5);
    expect(result).toContain(6);
  });

  test('returns correct result', () => {
    const result = differenceOfTwoArraysTwo([1, 6, 5, 2], [2, 4, 1]);
    expect(result).toHaveLength(3);
    expect(result).toContain(4);
    expect(result).toContain(5);
    expect(result).toContain(6);
  });
});

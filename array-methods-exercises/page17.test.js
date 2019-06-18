import { deleteDuplicatesPush, 
         deleteDuplicatesSort, 
         deleteDuplicatesReduce,
         unionOfTwoArrays, 
         differenceOfTwoArrays, 
         differenceOfTwoArraysTwo } from './page17';

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


describe('unionOfTwoArrays', () => {
  test('returns correct result', () => {
    const result = unionOfTwoArrays([1, 2, 3], [7, 3, 6, 2]);
    expect(result).toHaveLength(5);
    expect(result).toContain(1);
    expect(result).toContain(2);
    expect(result).toContain(3);
    expect(result).toContain(6);
    expect(result).toContain(7);
  });

  test('returns correct result', () => {
    const result = unionOfTwoArrays([7, 3, 6, 2], [1, 3, 2]);
    expect(result).toHaveLength(5);
    expect(result).toContain(1);
    expect(result).toContain(2);
    expect(result).toContain(3);
    expect(result).toContain(6);
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

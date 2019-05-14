import { deleteDuplicatesPush, deleteDuplicatesSort, deleteDuplicatesReduce } from './page17';

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

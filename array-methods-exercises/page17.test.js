import { deleteDuplicatesPush, deleteDuplicatesSort } from './page17';

describe('delete duplicates with push', () => {
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

describe('delete duplicates with sort', () => {
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
import { getMostFrequentItemWithForEach, getMostFrequentItemWithSort } from './page15.js';

describe('getMostFrequentItemWithForEach', () => {
  test('returns { item: "a", count: 3 }', () => {
    const result = getMostFrequentItemWithForEach(['a', 'c', 'a', 'a', 'b', '3', '1', '3']);
    expect(result).toEqual({ item: 'a', count: 3 });
  });

  test('returns { item: "777", count: 2 }', () => {
    const result = getMostFrequentItemWithForEach(['777', 'c', 'a', '777', 'b', '3', '1', '33']);
    expect(result).toEqual({ item: '777', count: 2 });
  });

  test('returns { item: "a", count: 3 }', () => {
    const result = getMostFrequentItemWithForEach(['a', 'a', 'a']);
    expect(result).toEqual({ item: 'a', count: 3 });
  });
});

describe('getMostFrequentItemWithSort', () => {
  test('returns { item: "a", count: 3 }', () => {
    const result = getMostFrequentItemWithSort(['a', 'c', 'a', 'a', 'b', '3', '1', '3']);
    expect(result).toEqual({ item: 'a', count: 3 });
  });

  test('returns { item: "777", count: 2 }', () => {
    const result = getMostFrequentItemWithSort(['777', 'c', 'a', '777', 'b', '3', '1', '33']);
    expect(result).toEqual({ item: '777', count: 2 });
  });

  test('returns { item: "a", count: 3 }', () => {
    const result = getMostFrequentItemWithSort(['a', 'a', 'a']);
    expect(result).toEqual({ item: 'a', count: 3 });
  });
});

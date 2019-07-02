import { 
         getMostFrequentItemWithForEach, 
         getMostFrequentItemWithSort, 
         getMostFrequentItemWithReduce,
         getMostFrequentItemWithReduceTwo, 
         uniqueItems, 
         uniqueItemsReduce
       } from './page15.js';

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

describe('getMostFrequentItemWithReduce', () => {
  test('returns { item: "a", count: 3 }', () => {
    const result = getMostFrequentItemWithReduce(['a', 'c', 'a', 'a', 'b', '3', '1', '3']);
    expect(result).toEqual({ item: 'a', count: 3 });
  });

  test('returns { item: "777", count: 2 }', () => {
    const result = getMostFrequentItemWithReduce(['777', 'c', 'a', '777', 'b', '3', '1', '33']);
    expect(result).toEqual({ item: '777', count: 2 });
  });

  test('returns { item: "a", count: 3 }', () => {
    const result = getMostFrequentItemWithReduce(['a', 'a', 'a']);
    expect(result).toEqual({ item: 'a', count: 3 });
  });
});

describe('getMostFrequentItemWithReduceTwo', () => {
  test('returns { item: "a", count: 3 }', () => {
    const result = getMostFrequentItemWithReduceTwo(['a', 'c', 'a', 'a', 'b', '3', '1', '3']);
    expect(result).toEqual({ item: 'a', count: 3 });
  });

  test('returns { item: "777", count: 2 }', () => {
    const result = getMostFrequentItemWithReduceTwo(['777', 'c', 'a', '777', 'b', '3', '1', '33']);
    expect(result).toEqual({ item: '777', count: 2 });
  });

  test('returns { item: "a", count: 3 }', () => {
    const result = getMostFrequentItemWithReduceTwo(['a', 'a', 'a']);
    expect(result).toEqual({ item: 'a', count: 3 });
  });
});

describe('uniqueItems', () => {
  test('returns correct result', () => {
    const result = uniqueItems([7, 'a', 7, 'b', 8, 4, 'b', 'b', 'b', 7, 4]);
    expect(result).toHaveLength(2);
    expect(result).toContain(8);
    expect(result).toContain('a');
  });
});

describe('uniqueItemsReduce', () => {
  test('returns correct result', () => {
    const result = uniqueItemsReduce([7, 'a', 7, 'b', 8, 4, 'b', 'b', 'b', 7, 4]);
    expect(result).toHaveLength(2);
    expect(result).toContain(8);
    expect(result).toContain('a');
  });
});

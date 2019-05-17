import { iterateArray, mapArray } from './page20.js';

const orders = [
  {
    status: 'confirmed',
    details: [
      {
        item: 'milk',
        units_sold: 2,
        unit_price: 0.5
      },
      {
        item: 'jogurt',
        units_sold: 3,
        unit_price: 2
      }
    ]
  },
  {
    status: 'not-confirmed',
    details: [
      {
        item: 'milk',
        units_sold: 2,
        unit_price: 0.5
      },
      {
        item: 'jogurt',
        units_sold: 3,
        unit_price: 2
      }
    ]
  },
  {
    status: 'confirmed',
    details: [
      {
        item: 'milk',
        units_sold: 7,
        unit_price: 0.5
      },
      {
        item: 'butter',
        units_sold: 3,
        unit_price: 3
      }
    ]
  }
];

describe('iterateArray()', () => {
  test('should return correct result provided orders array', () => {
    const correctResult = [
      {item: 'milk', price: 4.5},
      {item: 'jogurt', price: 6},
      {item: 'butter', price: 9}
    ];
    const iterateArrayResult = iterateArray(orders);
    expect(iterateArrayResult).toContainEqual(correctResult[0]);
    expect(iterateArrayResult).toContainEqual(correctResult[1]);
    expect(iterateArrayResult).toContainEqual(correctResult[2]);
  });
});

describe('mapArray()', () => {
  test('should return correct result provided orders array', () => {
    const correctResult = [
      {item: 'milk', price: 4.5},
      {item: 'jogurt', price: 6},
      {item: 'butter', price: 9}
    ];
    const mapArrayResult = mapArray(orders);
    expect(mapArrayResult).toContainEqual(correctResult[0]);
    expect(mapArrayResult).toContainEqual(correctResult[1]);
    expect(mapArrayResult).toContainEqual(correctResult[2]);
  });
});

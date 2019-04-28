import { even } from './page6.js';

//beforeAll(() => {console.log('beforeAll')});

describe('test for even number', () => {
  //console.log('inside describe');
  beforeAll(() => {
    //console.log('beforeAll inside describe')
  });

  test('returns true when passing 6 as an argument', () => {
    expect(even(6)).toBe(true);
    //console.log('inside test');
  });

  test('returns false when passing 11 as an argument', () => {
    expect(even(11)).toBe(false);
  });
});
//console.log('after describe')

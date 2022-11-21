import { reverseArray } from './script.js';

it('reverse the array', () => {
  const result = reverseArray([1, 6, -4, 0, 10]);
  expect(result).toEqual([10, 0, -4, 6, 1]);
});

it('null if array is not taken', () => {
  const result = reverseArray('[1, 6, -4, 0, 10]');
  expect(result).toEqual(null);
});

it('null if array is not taken', () => {
  const result = reverseArray(5);
  expect(result).toEqual(null);
});

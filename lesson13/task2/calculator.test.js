import getSum, { getSquareNumbers, getOddNumbers } from './calculator.js';

it('should get square numbers', () => {
  const result = getSquareNumbers([1, 2, 3, 4]);
  expect(result).toEqual([1, 4, 9, 16]);
});

it('should keep odd numbers only', () => {
  const result = getOddNumbers([1, 2, 3, 4]);
  expect(result).toEqual([1, 3]);
});

it('should get sum of numbers', () => {
  const result = getSum(4, 10);
  expect(result).toEqual(14);
});

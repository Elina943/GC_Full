import importType from 'eslint-plugin-import/lib/core/importType';
import getMin from './getMinSquaredNumber.js';

it('null if array is empty', () => {
  const result = getMin([]);
  expect(result).toEqual(null);
});

it('null if aray is not taken', () => {
  const result = getMin('Hello!');
  expect(result).toEqual(null);
});

it('get the min square of numbers', () => {
  const result = getMin([-777, 3, -2, 6, 45, -20]);
  expect(result).toEqual(4);
});

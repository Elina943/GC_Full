import { calc } from './calculator.js';

it('sum of numbers', () => {
  const result = calc('20 + 5');
  expect(result).toEqual('20 + 5 = 25');
});

it('substraction of numbers', () => {
  const result = calc('20 - 5');
  expect(result).toEqual('20 - 5 = 15');
});

it('multiplying of numbers', () => {
  const result = calc('20 * 5');
  expect(result).toEqual('20 * 5 = 100');
});

it('deviding of numbers', () => {
  const result = calc('20 / 5');
  expect(result).toEqual('20 / 5 = 4');
});

it('null if array is empty', () => {
  const result = calc(['20 + 5']);
  expect(result).toEqual(null);
});

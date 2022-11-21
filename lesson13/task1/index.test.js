const {
  default: importType,
} = require('eslint-plugin-import/lib/core/importType');

it('17 even in Africa 17', () => {
  expect(17).toEqual(17);
});

it('18 is not 17', () => {
  expect(18).not.toEqual(17);
});

const getEvenNumbers = (numbers) => numbers.filter((num) => num % 2 === 0);

it('should get only even numbers from array', () => {
  const result = getEvenNumbers([1, 2, 3, 4, 5]);

  expect(result).toEqual([2, 4]);
});

const numbers = [
  2,
  -1,
  '3.45text',
  4.432,
  '-4ol',
  -56.09,
  'eleven',
  'twelve',
  NaN,
];

const getParsedIntegers = (arr) => arr.map((el) => Number.parseInt(el));

const getParsedIntegersV2 = (arr) => arr.map((el) => parseInt(el));

const getParsedFloats = (arr) => arr.map((el) => Number.parseFloat(el));

const getParsedFloatsV2 = (arr) => arr.map((el) => parseFloat(el));

console.log(getParsedIntegers(numbers));
console.log(getParsedIntegersV2(numbers));
console.log(getParsedFloats(numbers));
console.log(getParsedFloatsV2(numbers));

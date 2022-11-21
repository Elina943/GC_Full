const numbers = [2, -1, '3.45', 4.432, '-4', -56.09, 'eleven', 'twelve', NaN];

const getFiniteNumbers = (arr) =>
  arr.filter((el) => {
    return Number.isFinite(el) === true;
  });

const getFiniteNumbersV2 = (arr) =>
  arr.filter((el) => {
    return isFinite(el) === true;
  });

const getNan = (arr) =>
  arr.filter((el) => {
    return Number.isNaN(el);
  });

const getNanV2 = (arr) =>
  arr.filter((el) => {
    return isNaN(el);
  });

const getIntegers = (arr) =>
  arr.filter((el) => {
    return Number.isInteger(el);
  });

console.log(getFiniteNumbers(numbers));
console.log(getFiniteNumbersV2(numbers));
console.log(getNan(numbers));
console.log(getNanV2(numbers));
console.log(getIntegers(numbers));

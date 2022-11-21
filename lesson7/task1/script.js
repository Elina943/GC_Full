const getSpecialNumbers = (numbers) => numbers.filter((num) => num % 3 === 0);

const arr = [1, 2, 3, 17, 18, 20, 21, 24, 25, 30];
console.log(getSpecialNumbers(arr));

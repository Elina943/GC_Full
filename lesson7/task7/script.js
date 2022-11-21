const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const increaseEvenEl = (arr, delta) =>
  Array.isArray(arr)
    ? arr.map((num) => (num % 2 === 0 ? num + delta : num))
    : null;

console.log(increaseEvenEl([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));

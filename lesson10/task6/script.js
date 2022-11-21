const getRandomNumbers = (length, from, to) => {
  const min = Number.isInteger(from) ? from + 1 : Math.ceil(from);
  const max = Number.isInteger(to) ? to - 1 : Math.floor(to);
  if (from >= to || Math.abs(to - Math.floor(from)) < 1) {
    return null;
  }
  // eslint-disable-next-line prefer-spread
  return Array.from(Array(length)).map(
    () => Math.floor(Math.random() * (max - min)) + min
  );
};

console.log(getRandomNumbers(5, 1.4, 1.9));
console.log(getRandomNumbers(7, 1.4, 7.9));
console.log(getRandomNumbers(7, 1.5, 1.9));
console.log(getRandomNumbers(10, 8, 17.5));
// console.log(getRandomNumbers(1.4, 1.9));
// // examples
// getRandomNumbers(5, 1.4, 3.22); // ==> [2, 2, 2, 3, 2]
// getRandomNumbers(5, 1.4, 3.22); // ==> [3, 2, 2, 2, 2]
// getRandomNumbers(5, 1.4, 3.22); // ==> [3, 3, 2, 3, 2]
// getRandomNumbers(3, 2.4, 4.5); // ==> [4, 3, 4]
console.log(getRandomNumbers(3, 1.9, 2.5)); // ==> [2, 2, 2]

// getRandomNumbers(7, 1.4, 1.9); // ==> null
// getRandomNumbers(7, 2.11, 2.9); // ==> null
// getRandomNumbers(1, 2.5, 0.9); // ==> null

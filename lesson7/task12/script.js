const arrAverage = (arr) =>
  Array.isArray ? arr.reduce((a, b) => a + b) / arr.length : null;
console.log(arrAverage([2, 5, 6, 3]));

const arr = [2, 5, 6, 3];
console.log(arr.length);
console.log(average(arr));

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sum = (arr) =>
//   Array.isArray(arr)
//     ? arr.reduce(function (acc, num) {
//         return acc + num;
//       }, 0)
//     : null;

const sum = (arr) =>
  Array.isArray(arr) ? arr.reduce((acc, num) => acc + num) : null;

console.log(sum(arr));

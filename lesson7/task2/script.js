// const sortDesc = (numbers) => {
//   const copy = numbers.slice();
//   copy.sort((a, b) => b - a);

//   return copy;
// };

const sortDesc = (numbers) => numbers.slice().sort((a, b) => b - a);
const arr = [1, 5, 9, 12, 2, 3, 17, 18, 20, 21, 24, 25, 30];
console.log(sortDesc(arr));

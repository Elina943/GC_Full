// function swap(numbers) {
//   // put your code here
//   const [start, ...rest] = numbers;
//   return [...rest, start];
// }
// console.log(swap([1, 10, 9, 11]));

// function swapManual(numbers) {
//   let result = numbers;
//   let changedNum = [];
//   for (let i = 1; i < result.length - 1; i++) {
//     const num = result.shift();
//     changedNum = result.concat(num);
//   }
//   return changedNum;
// }
// function swapManual(numbers) {
//   const num = numbers.shift();
//   const number = numbers.push(num);
//   return numbers;
// }

function swapManual(numbers) {
  const copyNum = numbers.slice();
  const num = copyNum.shift();
  const result = [];
  for (let i = 0; i < copyNum.length; i++) {
    result.push(copyNum[i]);
  }
  result.push(num);
  return result;
}
console.log(swapManual([1, 10, 9, 11]));

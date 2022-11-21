const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const cloneArr = (arr) => (Array.isArray(arr) ? [...arr] : null);
//   const cloneArr = [...arr];
//   return cloneArr;

console.log(cloneArr(arr));

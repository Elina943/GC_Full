const arr = [1, 6, -4, 0, 10];

export const reverseArray = (arr) =>
  Array.isArray(arr) ? arr.slice().reverse() : null;

console.log(reverseArray(arr));

function squareArray(arr) {
  return Array.isArray(arr) ? arr.map((num) => num * num) : null;
}

const arr = [1, 6, -4, 0, 10];

console.log(squareArray([10, 10, 10]));
console.log(squareArray(arr));
console.log(arr);

const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  let copyArr = arr.slice();
  let res = [];
  for (let i = 0; i < copyArr.length; i++) {
    if (copyArr[i] % 2 === 0) {
      copyArr[i] += delta;
    }
    res.push(copyArr[i]);
  }

  return res;
};

console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20));
// examples
increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20); // ===> [22, 5, 26, 28, 11, 9, 24]
console.log(increaseEvenEl([7, 11, 1], 10)); // ===> [7, 11, 1]
console.log(increaseEvenEl([], 120)); // ===> []

function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let copyArr = arr.slice();
  let res = [];
  for (let i = copyArr.length - 1; i >= 0; i--) {
    res.push(copyArr[i]);
  }
  return res;
}

console.log(reverseArray([2, 5, 6, 8, 11, 9, 4]));

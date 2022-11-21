function cloneArr(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i]);
  }
  return res;
}

function checker(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let sum = 0;
  let max = 0;
  let min = arr[0];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  sum = max + min;
  if (sum > 1000) {
    return true;
  }
  return false;
}

console.log(checker([2, 5, 6, 8, 11, 9, 4]));

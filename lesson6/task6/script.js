// возвести все значения массива в квадрат

function squareArray(arr) {
  let copyArr = arr.slice();
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(copyArr[i] * copyArr[i]);
  }
  if (!Array.isArray(arr)) {
    return null;
  }
  return result;
}

console.log(squareArray([1, 10, 9, 11]));

// examples
squareArray([1, 10, 9, 11]); // ==> [1, 100, 81, 121]
squareArray([10, 0, -4]); // ==> [100, 0, 16]
squareArray([1]); // ==> [1]

//сортировка массива ппо возрастанию и убыванию

// var numbers = [4, 2, 5, 1, 3];
// numbers.sort(function (a, b) {
//   return a - b;
// });
// console.log(numbers); // [1, 2, 3, 4, 5]

function sortAsc(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  return array.sort((a, b) => a - b);
}

function sortDesc(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  return array.sort((a, b) => b - a);
}

console.log(sortAsc([4, 2, 5, 1, 3]));
console.log(sortDesc([4, 2, 5, 1, 3]));

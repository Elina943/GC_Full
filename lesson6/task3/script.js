function getSpecialNumbers(from, to) {
  // put your code here
  let specialNumArr = [];
  for (let i = from; i <= to; i++) {
    if (i % 3 === 0) {
      specialNumArr.push(i);
    }
  }
  return specialNumArr;
}

// examples
getSpecialNumbers(1, 10); // ==> [3, 6, 9]
getSpecialNumbers(-10, 10); // ==> [-9, -6, -3, 0, 3, 6, 9]
getSpecialNumbers(1, 2); // ==> [ ]

function findDivCount(a, b, n) {
  let k = 0;
  for (let i = a; i <= b; i += 1) {
    if (i % n === 0) {
      k += 1;
    }
  }
  return k;
}

console.log(findDivCount(1, 10, 2));

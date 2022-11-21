function sum(from, to) {
  let summ = 0;
  for (let index = from; index <= to; index++) {
    summ += index;
  }
  return summ;
}
function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
  // hint: you should use sum function inside compareSums
  //   // put your code here

  const sum1 = sum(firstFrom, firstTo);
  const sum2 = sum(secondFrom, secondTo);

  if (sum1 > sum2) {
    return true;
  }
  return false;
}

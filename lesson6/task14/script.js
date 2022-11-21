const getSubArray = (arr, numberOfElements) => {
  // put your code here
  const res = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (i < numberOfElements) {
      res.push(arr[i]);
    }
  }
  return res;
};

console.log(getSubArray([11, 4, 8, 3], 2));

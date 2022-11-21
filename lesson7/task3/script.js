//зробити плаский масив та відсортувати його за зростанням

const initArray = [1, [2, 3, 4], 5, [6]];

const flatArray = (arr) => {
  const flatArray = arr.slice().reduce((acc, elem) => {
    return acc.concat(elem);
  }, []);
  flatArray.sort((a, b) => a - b);
  return flatArray;
};

console.log(flatArray(initArray));

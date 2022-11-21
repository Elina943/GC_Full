const amount = [2, 4.567, 8.43, 9, 17.159];

const getTotalPrice = (arr) => {
  const sum = arr.reduce(function (acc, num) {
    return acc + num;
  }, 0);

  return '$' + Math.floor(sum * 100) / 100;
};

console.log(getTotalPrice(amount));

const transactions = ['  1.9', '16.4', 17, ' 1dollar '];
// 1. delete el with letters
// 2. use trim method
// 3. each element is string with $ and 2 sign after coma

const cleanTransactionsList = (arr) => {
  return arr
    .filter((el) => !isNaN(el))
    .map((el) => {
      let cur = parseFloat(el).toString();
      const split = cur.split('.');
      if (!split[1]) {
        cur += '.00';
      } else if (split[1].length === 1) {
        cur += '0';
      }
      return `$${cur}`;
    });
};

console.log(cleanTransactionsList(transactions));

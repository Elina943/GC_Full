const createCalculator = () => {
  let start = 0;
  function add(num) {
    return (start += num);
  }

  function decrease(num) {
    return (start -= num);
  }

  function reset() {
    return (start -= start);
  }

  function getMemo() {
    return start;
  }
  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};

const adding = createCalculator();
const decrease = createCalculator();
const reset = createCalculator();
const getMemo = createCalculator();

console.log(adding.add(7));
console.log(adding.add(7));
console.log(decrease.decrease(7));

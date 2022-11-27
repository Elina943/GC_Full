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

console.log(add(7));
console.log(decrease(6));
console.log(reset());
console.log(getMemo());

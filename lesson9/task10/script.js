function compareObjects(firstObj, secondObj) {
  const c = Object.keys(firstObj);
  const b = Object.keys(secondObj);
  if (c.length !== b.length) {
    return false;
  }
  return c.every((key) => firstObj[key] === secondObj[key]);
}

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

const obj5 = {
  age: 17,
  name: 'Tom',
};

console.log(compareObjects(obj2, obj3)); // ==> false
console.log(compareObjects(obj1, obj2)); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> true
console.log(compareObjects(obj4, obj5));

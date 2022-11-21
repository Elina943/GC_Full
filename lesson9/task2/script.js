const users = {
  'John Doe': 19,
  Tom: 17,
  Bob: 18,
};

// const copyObj = (obj) => Object.assign({}, obj);

const copyObj = (obj) => {
  const copyObj = { ...obj };
  return copyObj;
};

console.log(copyObj(users));
console.log(users);

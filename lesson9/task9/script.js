function buildObject(keysList, valuesList) {
  const obj = {};
  for (let i = 0; i < keysList.length; i++) {
    obj[keysList[i]] = valuesList[i];
  }
  return obj;
}

// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values);
console.log(result);

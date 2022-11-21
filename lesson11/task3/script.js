const message = "hello, everybody! I'm here with you!";

const splitString = (text, len = 10) => {
  const strArr = [];
  let startPosition = 0;

  // eslint-disable-next-line prettier/prettier
  if (typeof text === 'string') {
    while (true) {
      let chunk = text.substr(startPosition, len);
      if (chunk.length === 0) {
        break;
      }
      if (chunk.length < len) {
        chunk += '.'.repeat(len - chunk.length);
      }
      strArr.push(chunk);
      startPosition += len;
    }
    // eslint-disable-next-line prettier/prettier
    return strArr;
  }

  return null;
};

console.log(splitString(message, 5));
console.log(splitString([1, 4, 7, 9], 10));
console.log(splitString(message));

const message = "hello, everybody! I'm here with you!";

const splitText = (text, len = 10) => {
  const strArr = [];
  let startPosition = 0;

  // eslint-disable-next-line prettier/prettier
  if (typeof text === 'string') {
    while (true) {
      const chunk = text.substr(startPosition, len);
      if (chunk.length === 0) {
        break;
      }
      strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
      startPosition += len;
    }
    // eslint-disable-next-line prettier/prettier
    return strArr.join('\n');
  }

  return null;
};

console.log(splitText(message, 5));
console.log(splitText([1, 4, 7, 9], 10));
console.log(splitText(message));

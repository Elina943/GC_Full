const message = "hello, everybody! I'm here with you!";
const emptyText = '';

const countOccurrences = (text, str) => {
  if (str === '') {
    return null;
  }
  const mainText = text !== undefined ? text : '';
  return mainText.split(str).length - 1;
};

console.log(countOccurrences(message, ' '));
console.log(countOccurrences(message, 'e'));

console.log(countOccurrences(emptyText, 'e'));

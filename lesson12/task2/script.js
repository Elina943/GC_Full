const reverseString = (text) => {
  if (typeof text === 'string') {
    const arr = text.split('');
    return arr.reverse().join('');
  }
  return null;
};

console.log(reverseString('helpfull'));

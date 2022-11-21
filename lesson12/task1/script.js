/* eslint-disable default-case */
const calc = (expression) => {
  const [a, operator, b] = expression.split(' ');
  let result;
  switch (operator) {
    case '+':
      result = Number(a) + Number(b);
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = a / b;
      break;
  }
  return `${expression} = ${result}`;
};

console.log(calc('25 + 5'));
console.log(calc('25 - 5'));
console.log(calc('25 * 5'));
console.log(calc('25 / 5'));

const numbers = [-777, 3, -2, 6, 45, -20];

export default (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  const absNumbers = arr.map((el) => Math.abs(el));
  const result = Math.min(...absNumbers);
  return result * result;
};

console.log();
console.log();

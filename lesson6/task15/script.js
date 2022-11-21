// delete all dublicates
function removeDuplicates(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  const result = [...new Set(array)];
  return result;
}

console.log(removeDuplicates([1, 1, 3, 4, 5, 6, 7, 5, 6, 8]));

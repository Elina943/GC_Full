// find unique elements

function uniqueCount(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  const result = [...new Set(array)]; /// создаем массив без дубликатов и считаем его длиннуы
  return result.length;
}

console.log(uniqueCount([1, 1, 3, 4, 5, 6, 7, 5, 6, 8]));

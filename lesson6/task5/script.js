// пустой массив длинной len

// function createEmptyArray(len) {
//   let arr = [];
//   for (let i = 0; i < len; i++) {
//     arr = new Array(len);
//   }
//   return arr;
// }

function createEmptyArray(len) {
  return new Array(len);
}
console.log(createEmptyArray(5));

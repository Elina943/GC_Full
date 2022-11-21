// const arr = ['John', 'Olivya', 'Oleksandr', 'Nastya', 'Polina', 'Gregoriy'];

const filterNames = (arr, text) =>
  arr.filter((name) => name.length > 5 && name.includes(text));

// function filterNames(arr, text) {
//   return arr.filter(function (name) {
//     console.log(name, name.length, name.includes(text));
//     return name.length > 5 && name.includes(text);
//   });
// }

console.log(
  filterNames(
    ['John', 'Olivya', 'Oleksandr', 'Nastya', 'Polina', 'Gregoriy', 'Vanya'],
    'ya'
  )
);

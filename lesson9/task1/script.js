const users = {
  'John Doe': 19,
  Tom: 17,
  Bob: 18,
};

// const getAdults = (obj) => {
//   const usersArray = Object.entries(obj);
//   const filteredUserArr = usersArray.filter((user) => user[1] >= 18);
//   const usersNames = filteredUserArr.map((user) => user[0]);
//   return usersNames;
// };

const getAdults = (obj) =>
  Object.entries(obj)
    .filter((user) => user[1] >= 18)
    .map((user) => user[0]);

console.log(getAdults(users));

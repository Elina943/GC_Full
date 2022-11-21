const rooms = {
  room1: [
    { name: 'Jack' },
    { name: 'Andrey' },
    { name: 'Ann' },
    { name: 'Vasyl' },
  ],

  room2: [{ name: 'Dan' }],

  room3: [{ name: 'Denis' }, { name: 'Max' }, { name: 'Alex' }],
};

const getPeople = (obj) =>
  Object.values(obj)
    .flat()
    .map((obj) => obj.name);
// .reduce((acc, el) => acc.concat((el) => Object.entries), []);

console.log(getPeople(rooms));

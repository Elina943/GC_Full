const contacts = [
  {
    name: 'Tom',
  },
  {
    name: 'Den',
  },
  {
    name: 'Anna',
  },
  {
    name: 'Adele',
  },
];

const text = '';

const sortContacts = (arr, direction = true) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const result = arr.sort((a, b) => {
    if (direction) {
      return a.name.localeCompare(b.name);
    }
    return b.name.localeCompare(a.name);
  });
  return result;
};

console.log(sortContacts(contacts, false));
console.log(sortContacts(text, false));

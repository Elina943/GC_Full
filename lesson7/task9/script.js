// const withdraw = (clients, balances, client, amount) =>
//   amount <= balances[clients.indexOf(client)]
//     ? balances[clients.indexOf(client)] - amount
//     : -1;

const withdraw = (clients, balances, client, amount) => {
  const indexOfClient = clients.indexOf(client);
  const personBalance = balances[indexOfClient];
  return amount <= personBalance ? personBalance - amount : -1;
};

console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));

//output
//37
//и массив balances должен быть [1400, 37, -6]

//example 2:

//input
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));

//output
//-1
//и массив balances должен быть [1400, 87, -6]

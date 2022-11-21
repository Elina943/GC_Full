// function withdraw(clients, balances, client, amount) {}

// function withdraw(clients, balances, client, amount) {
//   let indexOfPerson = clients.indexOf(client);
//   if (balances[indexOfPerson] >= amount) {
//     balances[indexOfPerson] - amount;
//     return balances;
//   } else if (balances[indexOfPerson] < amount) {
//     return -1;
//   }
// }
const balances = [1400, 87, -6];
function withdraw(clients, balances, client, amount) {
  for (let i = 0; i < clients.length; i++) {
    if (client === clients[i]) {
      if (amount <= balances[i]) {
        balances[i] -= amount;
        return balances[i];
      }
      return -1;
    }
  }
}

console.log(withdraw(['Ann', 'John', 'User'], balances, 'John', 50));
console.log(withdraw(['Ann', 'John', 'User'], balances, 'User', 50));
console.log(balances);

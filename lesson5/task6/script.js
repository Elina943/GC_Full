function getPrimes(num) {
  for (let i = num; i > 1; i -= 1) {
    let prime = true;
    for (let j = i - 1; j > 1; j -= 1) {
      if (i % j === 0) {
        prime = false;
      }
    }
    if (prime === true) {
      console.log(i);
    }
  }
}

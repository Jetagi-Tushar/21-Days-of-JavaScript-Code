function printMultiples(num, limit) {
  let multiples = [];
  for (let i = num; i <= limit; i = i + num) {
    multiples.push(i);
  }
  return multiples;
}

console.log(printMultiples(5, 50));

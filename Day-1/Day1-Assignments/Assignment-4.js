//4. Print only the numbers that are both even and perfect squares
let n = 20; // you can change the limit

for (let i = 1; i <= n; i++) {
  let sqrt = Math.sqrt(i);
  console.log(sqrt);

  if (Number.isInteger(sqrt) && i % 2 === 0) {
    console.log(i);
  }
}

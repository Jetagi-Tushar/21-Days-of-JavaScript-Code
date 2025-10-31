//1. Print all numbers divisible by 3 and 5 up to N
let n = 30;

for (let i = 1; i <= n; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}

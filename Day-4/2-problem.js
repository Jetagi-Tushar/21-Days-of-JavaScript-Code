function printFactors(num) {
  let digits = [];
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      digits.push(i);
    }
  }
  digits.push(num);
  return digits;
}
console.log(printFactors(100));

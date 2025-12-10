function printHCF(num1, num2) {
  let num1_factors = [];
  let num2_factors = [];
  for (let i = 1; i <= num1 / 2; i++) {
    if (num1 % i === 0) {
      num1_factors.push(i);
    }
  }
  num1_factors.push(num1);

  for (let i = 1; i <= num2 / 2; i++) {
    if (num2 % i === 0) {
      num2_factors.push(i);
    }
  }
  num2_factors.push(num2);
  let mergeArray = [...num1_factors, ...num2_factors];
  
  return mergeArray;
}

console.log(printHCF(12, 18));

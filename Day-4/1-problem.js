function convertToDigits(num) {
  let digit = [];
  while (num > 0) {
    digit.unshift(num % 10);
    num = Math.floor(num / 10);
  }
  return digit;
}

console.log(convertToDigits(1234));

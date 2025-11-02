function isLeapYear(year) {
  if (year % 400 === 0) {
    return true; // divisible by 400 → leap year
  } else if (year % 100 === 0) {
    return false; // divisible by 100 → not a leap year
  } else if (year % 4 === 0) {
    return true; // divisible by 4 → leap year
  } else {
    return false; // not divisible by 4 → not leap year
  }
}

console.log(isLeapYear(2024)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(2023)); // false

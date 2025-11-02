function isPosNegZero(number) {
  let msg;
  if (number === 0) {
    msg = "number is neutral";
  } else if (number < 0) {
    msg = "number is negative";
  } else {
    msg = "number is positive";
  }

  return msg;
}

console.log(isPosNegZero(0));

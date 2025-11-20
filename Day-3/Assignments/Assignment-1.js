let rows = 5;

for (let i = rows; i >= 1; i--) {
  let pattern = "";

  //print space
  for (let j = 1; j <= rows - i; j++) {
    pattern += " ";
  }

  //print starts or space
  for (let k = 1; k <= 2 * i - 1; k++) {
    if (k === 1 || k === 2 * i - 1 || i === rows) {
      pattern += "*";
    } else {
      pattern += " ";
    }
  }
  console.log(pattern);
}

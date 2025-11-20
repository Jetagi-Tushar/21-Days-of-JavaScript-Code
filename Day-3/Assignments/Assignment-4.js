let rows = 5;

for (let i = rows; i >= 1; i--) {
  let pattern = "";

  for (let j = 1; j <= rows - i; j++) {
    pattern = pattern + " ";
  }

  for (let j = 1; j <= 2 * i - 1; j++) {
    pattern = pattern + "*";
  }

  console.log(pattern);
}

for (let i = 2; i <= rows; i++) {
  let pattern = "";

  for (let j = 1; j <= rows - i; j++) {
    pattern = pattern + " ";
  }

  for (let j = 1; j <= 2 * i - 1; j++) {
    pattern = pattern + "*";
  }

  console.log(pattern);
}

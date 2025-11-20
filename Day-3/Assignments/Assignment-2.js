let rows = 5;

for (let i = 1; i <= rows; i++) {
  let pattern = "";

  for (let j = 1; j <= i; j++) {
    pattern = pattern + "*";
  }

  for (let j = 1; j <= 2 * (rows - i); j++) {
    pattern = pattern + " ";
  }

  for (let j = 1; j <= i; j++) {
    pattern = pattern + "*";
  }

  console.log(pattern);
}

for (let i = rows - 1; i >= 1; i--) {
  let pattern = "";

  for (let j = 1; j <= i; j++) {
    pattern = pattern + "*";
  }

  for (let j = 1; j <= 2 * (rows - i); j++) {
    pattern = pattern + " ";
  }

  for (let j = 1; j <= i; j++) {
    pattern = pattern + "*";
  }

  console.log(pattern);
}

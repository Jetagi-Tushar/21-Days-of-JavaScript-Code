let rows = 15;

for (let i = 1; i <= rows; i++) {
  let value = i % 2 === 1 ? 1 : 0;
  let line = "";

  for (let j = 1; j <= i; j++) {
    line = line + value;
    if (j !== i) line += " ";
    value = 1 - value;
  }
  console.log(line);
}

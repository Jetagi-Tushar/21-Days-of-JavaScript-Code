let num = 5;

// for (let i = 1; i <= 10; i++) {
//   console.log(`${num} * ${i} = ${num * i}`);
// }

for (let i = 1; i <= num; i++) {
  let pattern = "";
  for (let j = 1; j <= 10; j++) {
    pattern += `${i} * ${j} = ${i * j}\n`;
  }
  console.log(pattern);
}

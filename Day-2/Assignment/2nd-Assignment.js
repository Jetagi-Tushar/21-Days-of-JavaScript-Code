let a = 3;
let b = 4;
let c = 5;

// Check if all sides are equal
if (a === b && b === c) {
  console.log("Equilateral Triangle");
}
// Check if any two sides are equal
else if (a === b || b === c || a === c) {
  console.log("Isosceles Triangle");
}
// Check if it is right-angled (Pythagoras theorem)
else if (
  a * a + b * b === c * c ||
  a * a + c * c === b * b ||
  b * b + c * c === a * a
) {
  console.log("Right-Angled Triangle");
}
// Otherwise scalene
else {
  console.log("Scalene Triangle");
}

// function reverseString(str) {
//   let res = [];
//   let newStr = Array.from(str);
//   for (let i = 0; i < newStr.length; i++) {
//     res.unshift(newStr[i]);
//   }
//   return res.join("");
// }

// console.log(reverseString("javascript"));

function reverseString(str) {
  let reveString = "";
  for (let i = str.length - 1; i >=0; i--) {
    reveString += str[i];
  }
  return reveString;
}

console.log(reverseString("javascript"));

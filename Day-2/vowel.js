// first method
function isVowel(char) {
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < vowels.length; i++) {
    if (char === vowels[i]) {
      return "vowel";
    } else {
      return "consonent";
    }
  }
}

console.log(isVowel("t"));


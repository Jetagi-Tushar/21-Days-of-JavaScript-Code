function checkPalindrome(str) {
  let leftIndex = 0;
  let rightIndex = str.length - 1;
  while (leftIndex < rightIndex) {
    if (str[leftIndex] !== str[rightIndex]) return false;
    leftIndex++;
    rightIndex--;
  }
  return true;
}

console.log(checkPalindrome("ractecar"));

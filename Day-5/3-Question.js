function countChar(str) {
  let res = {};
  for (let i = 0; i < str.length; i++) {
    res[str[i]] = (res[str[i]] || 0) + 1;
  }
  return res;
}

console.log(countChar("banana"));

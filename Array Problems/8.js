function checkEqual(arr1, arr2) {
  let msg = "";
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        msg = "equal";
      } else {
        return "Not Equal";
      }
    }
  } else {
    msg = "Not Equal";
  }

  return msg;
}

console.log(checkEqual([1, 2, 3], [1, 3, 3]));

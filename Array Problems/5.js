function mergeArray(arr1, arr2) {
  let newArr = [];
  for (const ele of arr1) {
    console.log(ele);
    newArr.push(ele);
  }
  for (const ele of arr2) {
    newArr.push(ele);
  }

  return newArr;
}

console.log(mergeArray([1, 2, 3, 4], [5, 6]));

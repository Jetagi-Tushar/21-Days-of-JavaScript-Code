function rotateArray(arr, steps) {
  let newArr = [];
  for (let i = arr.length - 1; i >= arr.length - steps; i--) {
    newArr.unshift(arr[i]);
  }
  for (let j = 0; j < arr.length - steps; j++) {
    newArr.push(arr[j]);
  }
  return newArr;
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));

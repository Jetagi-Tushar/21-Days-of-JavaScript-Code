function secLargest(arr) {
  let sortedArray = arr.sort((a, b) => a - b);
  return sortedArray[sortedArray.length - 2];
}
console.log(secLargest([10, 20, 4, 45, 99]));

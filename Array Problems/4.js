function removeDuplicates(arr) {
  return arr.filter((el, index) => arr.indexOf(el) === index);
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 4]));

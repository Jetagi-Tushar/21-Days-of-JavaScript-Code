function countEvenOdd(arr) {
  let even = 0;
  let odd = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even += 1;
    } else {
      odd += 1;
    }
  }
  return { even, odd };
}

console.log(countEvenOdd([2, 5, 7, 8, 10]));

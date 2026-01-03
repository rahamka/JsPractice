// filter, map, reduce, forEach

let arr = [1, 2, 3];
// 6

// using reduce method.
const sum = arr.reduce((acc, curr) => {
  return acc + curr;
}, 1);

console.log(sum);

// using filter method
const twoDivisible = arr.filter((val) => {
  return val % 2 == 0;
});

console.log(twoDivisible);

// using map method
const mapMethod = arr.map((val) => {
  return val / 2;
});

console.log(mapMethod);

// using forEach method.
//let arr = [1, 2, 3];
arr.forEach((val) => {
  console.log(val + 1);
});

// includes method => checks is includes value in the array.

let nums = [1, 2, 3, 4, 5, 10, 23];
let isResultAvailable = nums.includes(4);
console.log(isResultAvailable);

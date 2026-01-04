// teach what's the difference in both functions?

let nums = [1, 2, 3, 4]; // 10

function sum(a, b, ...num) {
  // point: here a = 1, b = 2 & 3, 4 = ...num
  let arr = [...num];
  let result = arr.reduce((prev, curr) => {
    return prev + curr;
  });
  return result;
}

console.log(sum(4, 2, ...nums)); // why output is 10

function sum(a, b, ...num) {
  // point: here a = 1, b = 2 & 3, 4 = ...num
  let arr = [...num];
  let result = arr.reduce((prev, curr) => {
    return prev + curr;
  });
  return result;
}

console.log(sum(4, 1, ...nums)); // why output is 10

// test by self
let arr = [1, 2, 3, 4];

function sum2(a, b, c, ...num) {
  console.log(arguments);
  return [a, b, c, ...num].reduce((prev, curr) => prev + curr);
}

console.log(sum2(1, 2, 5, 7, 8, 9));

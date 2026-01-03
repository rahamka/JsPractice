// Default Parameters in JavaScript.
// how to Default Parameter in JavaScript to any Parameter of function.
function multiply(a, b = 1) {
  return a * b; // 6 * 1 // NaN => Not a Number.
}

console.log(multiply(3, ""));
// Note: callBack function override the undefined by it's own value in JavaScript.
console.log(true + 0); // true = 1;
console.log(false + 0); // false = 0;
console.log("" + 1); // false = 0;

// Setting Default value 6
function randomNum(num = 6) {
  return Math.floor(Math.random() * num) + 1; // 0.9
}

console.log(randomNum(10));

// Default Parameter
function DefaultFun(a, b = 5) {
  // console.log(arguments);
  return a * b;
}

console.log(DefaultFun(1));

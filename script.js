// What are Arguments in JavaScript?
function argumentsFun(a, b, c, d, e, f) {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }
  return sum;
}

console.log(argumentsFun(2, 3, 4, 3, 9, 1));

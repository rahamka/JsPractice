// What are Arguments in JavaScript?
function argumentsFun(a, b, c, d, e, f) {
  let sum = [];
  for (let i = 0; i < arguments.length; i++) {
    sum.push(arguments[i]);
  }
  sum = sum.reduce((prev, curr) => {
    return prev + curr;
  });
  return sum;
}

console.log(argumentsFun(2, 3, 4, 3, 9, 1));



function add(a, b, c) {
  console.log(arguments);
}

add(2, 3, 4);

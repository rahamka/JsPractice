// spread operator
let arr = [1, 2, 3, 4];
let shallowCopy = [...arr];
console.log(shallowCopy);

// function definition

// what is callStack in JavaScript?
// In JavaScript when we're creating the function then we're
// calling that function and the process in which function is
// executing that process is called callStack in JavaScript.

const sum = (val1, val2) => {
  return val1 + val2;
};

arr.forEach((val) => {
  console.log(val + 1);
});

// Implicit return

const newArr = [1, 2, 3, 4];
const result = newArr.reduce((prev, curr) => prev + curr);
console.log("Implicit = ", result);

const exResult = newArr.reduce((prev, curr) => {
  return prev + curr;
});

console.log("ExResult = ", exResult);

console.log("Final Result = ", result + exResult);

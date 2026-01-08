let element = document.getElementById("heading");
let allStyles = window.getComputedStyle(element);
// console.log(allStyles);

// Object Copy
let student = {
  Name: "Ali",
  Class: "Ix",
  isGraduate: false,
  Age: 19,
};

let newStudent = { ...student };
// console.log(newStudent);

// Default Parameter

function sum(a, b = 4) {
  return a + b;
}

console.log("sum = ", sum(10, 5));

// Rest Parameter.

function resetFun(a, b, ...c) {
  return [a, b, c]; // [1, 2, undefined]
}

console.log(resetFun(1, 2, 5, 6, 7, 10, 11));

// Destructuring and skip method for getting any value from the array.
let colors = ["red", "blue", "pink", "yellow", "skyblue", "green"];

const [, , pink, , ,] = colors;

console.log(pink); // blue

// nums array
let nums = [2, 3, 4, 5, 10, 20]; // even numbers
let result = [];
let divisible = nums.some((val) => {
  return val % 2 == 0 ? result.push(val) : false;
});
console.log(result);

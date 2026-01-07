// How to interact with DOM?
// What is BOM?
// In JavaScript BOM is like a DOM BOM means [Browser Object Model] means representation of the Browser

function sum(a = 1, b, c) {
  console.log(a);
  return a + b + c;
}

console.log(sum(2, 2)); // NaN ?
// why answer of this line of code is NaN? while i've declared the by default value to a parameter?

function spreadOperator(a, b, ...c) {
  return a + b + c.reduce((prev, curr) => prev + curr);
}

console.log(spreadOperator(1, 2, 3, 4, 5, 6));

//
let colors = ["red", "blue", "green"];
const [red, blue, green] = colors;
console.log(red);

//
let student = {
  Name: "Ahmad",
  Class: "Ix",
  Age: 18,
  isGraduate: false,
};

const { Name: userName, Class: userClass, Age: userAge, isGraduate } = student;
console.log(userAge);

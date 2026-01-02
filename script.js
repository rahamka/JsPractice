// forEach isn't returning something in javaScript but map method is returning/generating new array.
const fruits = ["banana", "apple", "peach", "mango", "grapes"];

console.log("Using ForEach Method.");

const value = fruits.forEach((val, i, arr) => {
  let firstLetter = val[0].toUpperCase();
  let remainLetter = val.slice(1);
  console.log(i + 1, firstLetter + remainLetter);
  console.log(arr);
  return firstLetter + remainLetter;
});

console.log(value);

let trimValue = "\n \n \nUsing Map Method.";
console.log(trimValue);

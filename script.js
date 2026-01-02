// forEach isn't returning something in javaScript but map method is returning/generating new array.
const fruits = ["banana", "apple", "peach", "mango", "grapes"];

const value = fruits.map((val, i) => {
  let firstLetter = val[0].toUpperCase();
  let remainLetter = val.slice(1);
  console.log(i + 1, firstLetter + remainLetter);
  return firstLetter + remainLetter;
});

console.log(value);

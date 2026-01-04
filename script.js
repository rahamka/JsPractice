// Spread Operator/Shallow Copy
const nums = [1, 2, 3, 4];
const nums2 = [5, 6, 7, 8];

const jointNums = [...nums, ...nums2];
console.log(jointNums);

const student = {
  Name: "Ahmad",
  Class: "Xii",
};

const newClass = { ...student, City: "sagyoun" };
console.log(newClass);

// How both function works?
function add() {
  let arr = [...arguments[0]];
  let result = arr.reduce(function (acc, curr) {
    return acc + curr;
  });
  return result;
}

console.log(add([2, 3, 4, 3, 5, 77]));

// function 2
function add() {
  let arr = [arguments[0]]; // array inside array => [[2, 3, 4, 3, 5, 77]]
  let result = arr.reduce(function (acc, curr) {
    return acc + curr;
  });
  return result;
}

console.log(add([2, 3, 4, 3, 5, 77]));

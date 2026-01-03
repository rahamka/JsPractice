const evenNumbers = [0, 2, 4, 6, 8, 10];

const someMethod = evenNumbers.some((val) => {
  return val > 4;
});

const finalValue = evenNumbers.every((val, i) => {
  return val % 2 !== 0;
});

console.log(finalValue);
console.log(someMethod);

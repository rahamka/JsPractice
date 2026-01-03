const evenNumbers = [0, 2, 4, 6, 8, 10];

const finalValue = evenNumbers.some((val, i) => {
  return val % 2 === 1 ? console.log(i) : "null";
});

console.log(finalValue);

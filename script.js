const evenNumbers = [0, 2, 4, 6, 8, 10];

const finalValue = evenNumbers.some((val) => {
  return val % 99 == 999;
});

console.log(finalValue);

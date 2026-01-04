let nums = [1, 2, 3, 4];

function sum(num = [...nums]) {
  let arr = [...num];
  let result = arr.reduce((prev, curr) => {
    return prev + curr;
  });
  return result;
}

console.log(sum());

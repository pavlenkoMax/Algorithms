function sum(arr) {
  let result = 0;

  if (arr.length !== 1) {
    result = arr[0] + sum(arr.slice(1));
  } else {
    return arr[0];
  }

  return result;
};

const arr = [2, 4, 6, 18];
const sumValue = sum(arr);

console.log(sumValue);
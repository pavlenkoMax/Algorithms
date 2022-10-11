// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(number){
  const resultArr = [];

  for (let index = 0; index <= number; index++) {
    if (index < 2) {
      resultArr.push(index);
    } else {
      resultArr.push((resultArr[index - 1] + resultArr[index - 2]));
    }
  }

  return resultArr[number];
};

console.log(fibonacciIterative(13));


function fibonacciRecursive(number) {
  if (number < 2) {
    return number;
  }

  return fibonacciRecursive(number - 1) + fibonacciRecursive(number - 2);
};

console.log(fibonacciRecursive(13));
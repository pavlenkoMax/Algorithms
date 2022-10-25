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

function fibonacciRecursive(number) { // O(2^n)
  if (number < 2) {
    return number;
  }

  return fibonacciRecursive(number - 1) + fibonacciRecursive(number - 2);
};

console.log(fibonacciRecursive(10));

function fibonacciMemoization() { //O(n)
  let cache = {};
  return function fib(n) {
    calculations++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n-1) + fib(n-2);
        return cache[n];
      }
    }
  }
};

function fibonacciMemoization2(n) {
  let answer = [0,1];
  for ( let i = 2; i <= n; i++) {
    answer.push(answer[i-2]+ answer[i-1]);
  }
  return answer.pop();
}

const fasterFib = fibonacciMemoization();

console.log('DP', fasterFib(100));
console.log('DP2', fibonacciMemoization2(100));

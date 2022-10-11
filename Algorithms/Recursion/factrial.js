function findFactorialRecursive(number) {
  if (number === 2) {
    return number;
  }

  return number * findFactorialRecursive(number - 1);
};

function findFactorialIterative(number) {
  let result = 1;

  while(number) {
    result = number * result;
    number--;
  }

  return result;
};
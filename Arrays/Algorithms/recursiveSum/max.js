function max(arr) {
  if (arr.length === 2) {
    return arr[0] > arr[1] ? arr[0] : arr[1];
  }

  subMax = max(arr.slice(1));

  return arr[0] > subMax ? arr[0] : subMax;
};

const arr = [2, 18, 4, 156, 6, 12, 30];
const largestNumber = max(arr);

console.log(largestNumber);
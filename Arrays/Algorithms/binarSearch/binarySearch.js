function binarySearch(arr, elValue) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    mid = low + high;
    guess = arr[mid];

    if (guess === elValue) {
      return mid;
    } else if (guess > elValue) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
};

const arr = [1, 2, 3, 4, 5, 6, 7];
const index = binarySearch(arr, 4);

console.log(arr[index]);
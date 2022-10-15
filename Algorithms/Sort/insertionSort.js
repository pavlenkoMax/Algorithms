const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  for (let index = 1; index < array.length; index++) {
    if (array[index] < array[index - 1]) {
      for (let j = 0; j < index; j++) {
        const el = array[j];

        if (el > array[index]) {
          array.splice(j, 0, array[index]);
        }
      }

      array.splice(index + 1, 1);
    }
  }
}

insertionSort(numbers);
console.log(numbers);
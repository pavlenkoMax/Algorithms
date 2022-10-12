const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  for (let j = 0; j < array.length; j++) {
    let smallerItemIndex = j;

    for (let i = 0; i <= array.length; i++) {
      if (i >= j && array[i] < array[smallerItemIndex]) {
        smallerItemIndex = i;
      }
    }

    let a = array[j];

    array[j] = array[smallerItemIndex];
    array[smallerItemIndex] = a;
  }
}

selectionSort(numbers);

console.log(numbers);
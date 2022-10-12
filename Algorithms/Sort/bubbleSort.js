const numbers = [320, 99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  for (let j = 0; j <= array.length; j++) {
    for (let index = 0; index <= array.length; index++) {
      const element1 = array[index];
      const element2 = array[index + 1];
  
      if (element1 > element2) {
        array[index] = element2;
        array[index + 1] = element1;
      }
    }
  }
}

bubbleSort(numbers);
console.log(numbers);
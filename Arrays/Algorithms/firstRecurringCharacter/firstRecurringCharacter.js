//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input) {
  const set = new Set();
  let result = undefined;
  let index = 0;

  while (index <= (input.length - 1)) {
    if (set.has(input[index])) {
      result = input[index];
      break;
    } else {
      set.add(input[index]);
      index += 1;
    }
  }

  return result;
}

firstRecurringCharacter([2,5,5,2,3,5,1,2,4]);
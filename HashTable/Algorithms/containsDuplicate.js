var containsDuplicate = function(nums) {
  const set = new Set();

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];

    if (set.has(element)) {
      return true;
    } else {
      set.add(element);
    }
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
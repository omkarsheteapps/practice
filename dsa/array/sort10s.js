function sortOne(nums) {
    let start = 0;
    let end = nums.length - 1;
  
    while (start <= end) {
      switch (nums[start]) {
        case 1:
          swap(nums, start, end);
          end--;
          break;
        case 0:
          start++;
          break;
      }
    }
    return nums;
  }
  
  function swap(nums, pos1, pos2) {
    let temp = nums[pos1];
    nums[pos1] = nums[pos2];
    nums[pos2] = temp;
  }
  
  console.log(sortOne([1, 0, 1, 0, 1, 1, 0, 0]));
let highest = -Infinity
let secondHighest = Infinity;

let nums = [1,2,3,5,4,9,7]


for(let i=0;i<nums.length;i++){
    if(nums[i] > highest){
        secondHighest = highest
        highest = nums[i]
    }else if (nums[i] > secondHighest && nums[i] != highest) {
        secondHighest = nums[i];
    }
  

}

console.log(highest, secondHighest)
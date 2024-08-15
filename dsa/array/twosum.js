function twoSum(nums, target){
    let len = nums.length

    for(let i = 0;i< len -1 ;i++){
        let goal = target - nums[i]
        let index = nums.indexOf(goal,i+1)
        if(index !== -1){
            return [i, index]
        }
    }

}

console.log(twoSum([2,7,11,15],9))
console.log(twoSum([3,2,4],6))
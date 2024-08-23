function findTheDuplicate(nums){
    nums.sort((a,b) => a-b)

    for(let i=0;i<nums.length-1;i++){
        if(nums[i] === nums[i+1]){
            return nums[i]
        }
    }
    return 'Not found'
}

console.log(findTheDuplicate([1,7,3,4,3,3,5]))

// Can be solved usng hashmap
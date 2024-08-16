function productOfArrayExceptSelf(nums){
    let left = [];
    let right = [];
    let res = [];

    left[0] = 1;
    right[nums.length-1] = 1;

    for(let i=1;i<nums.length;i++){
        left[i] = nums[i-1] * left[i-1]
    }

    for(let i=nums.length-2;i > -1;i--){
        right[i] = nums[i+1] * right[i+1]
    }

    for(let i =0; i<nums.length;i++){
        res[i] = left[i] * right[i];
    }

    return res

}

console.log(productOfArrayExceptSelf([2,3,4,2]))
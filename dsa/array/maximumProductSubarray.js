function maximumProductSubarray(nums){
    let n = nums.length;
    let leftProduct = 1;
    let rightProduct = 1;
    let ans = nums[0];

    for(let i =0;i<n;i++){

        leftProduct = leftProduct === 0 ? 1: leftProduct
        rightProduct = rightProduct === 0 ? 1: rightProduct

        leftProduct = leftProduct * nums[i];
        rightProduct = rightProduct * nums[n-1-i]
        
        ans = Math.max(ans,Math.max(leftProduct, rightProduct))

    }

    return ans
}

console.log(maximumProductSubarray([2,3,-2,4]))
function Permutations(nums) {
    let results = []

    backtrack(results,[],nums)
    return results
};

function backtrack(results, temp, nums){
    if(temp.length === nums.length){
        results.push([...temp])
        return
    }

    for(let i=0;i<nums.length;i++){
        if(temp.includes(nums[i])){
            continue
        }
        temp.push(nums[i]);
        backtrack(results,temp,nums)
        temp.pop()
    }
}
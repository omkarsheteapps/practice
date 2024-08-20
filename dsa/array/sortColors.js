function sortColors(nums){
    let start =0;
    let middle =0;
    let end = nums.length-1;

    while(middle<=end){

        switch(nums[middle]){
            case 0: 
                swap(nums,middle,start)
                start++
                middle++
                break
            case 1:
                middle++
                break
            case 2:
                swap(nums,middle,end)
                end--
                break
        }
    }
}

function swap(nums,pos1,pos2){
    let temp = nums[pos1];
    nums[pos1] = nums[pos2];
    nums[pos2] = temp;
}
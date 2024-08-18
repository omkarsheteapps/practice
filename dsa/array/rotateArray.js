function rotateArrayRight(nums,k){
    k = k % nums.length;

    if(k === 0){
        return nums;
    }

    return nums.slice(-k).concat(nums.slice(0, -k))

}

const arr = [1, 2, 3, 4, 5];
const k = 2;
const rotatedArr = rotateArrayRight(arr, k);
console.log(rotatedArr);
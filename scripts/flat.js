// 3. implement Array.prototype.flat()

const arr = [1, [2], [3, [4]]];
flat(arr)
console.log(flat(arr, 1))
console.log(flat(arr, 2))

function flat(arr, depth = 1) {
    const result = []
    const stack = []
    for(let item of arr){
        stack.push([item,depth])
    }

    while(stack.length > 0){
        const [top, depth] = stack.pop()

        if(Array.isArray(top) && depth > 0){
            for(const item of top){
                stack.push([item, depth-1])
            }
        }else{
            result.push(top)
        }
    }

    return result.reverse()

}
Array.prototype.myReduce = function(cb, initialValue){
    let accumulator = initialValue

    for(let i=0;i< this.length;i++){
        accumulator = cb(accumulator,this[i])
    }

    return accumulator

}

let arr1 = [1, 2, 3, 4];
let sum1 = arr1.myReduce((acc, val) => acc + val, 0);
console.log(sum1);
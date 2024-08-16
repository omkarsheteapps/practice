// 23. create a sum()


function sum(num){
    const func = function(num2){
        return sum(num + num2)
    }

    func.valueOf = () => num
    return func
}


console.log(sum(5)(-1)(2) == 6)

// Think of each sum call as creating a new "container" holding the current sum. Recursion passes this updated sum forward until the chain ends, where valueOf reveals the final total
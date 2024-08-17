// 2. implement curry() with placeholder support

function nodeInIdenticalDomTree(rootA, rootB, target){
    let stackA = [rootA]
    let stackB = [rootB]

    while(stackA.length){
        let currentA = stackA.pop()
        let currentB = stackB.pop()

        if(currentA === target){
            return currentB
        }

        currentA.childNodes.forEach((item) => stackA.push(item))
        currentB.childNodes.forEach((item) => stackB.push(item))

    }

}
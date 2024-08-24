function deepComparison(first,second){

    if(first === second){
        return true
    }

    if(first === null || second === null || typeof first !== "object" || typeof second !== "object"){
        return false
    }

    let keys1 = Object.keys(first)
    let keys2 = Object.keys(second)

    if(keys1.length !== keys2.length){
        return false
    }

    for(let key of keys1){
        if(!second.hasOwnProperty(key) || !deepComparison(first[key],second[key])){
            return false
        }
    }

    return true

}
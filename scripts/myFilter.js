Array.prototype.myFilter = function(cb){
    let newArr = []

    for(let i=0;i<this.length;i++){
        if(cb(this[i]))
            newArr.push(this[i])
    }

    return this[i]
}
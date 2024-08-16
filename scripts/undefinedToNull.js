// 176. undefined to null

function undefinedToNull(args){
    if(args === undefined) return null;
    if(Array.isArray(args)){
        for(let item of args){
            item = undefinedToNull(item)
        }
    }
    if(typeof args === 'object'){
        for(let key in args){
            args[key] = undefinedToNull(args[key])
        }
    }
    return args
}

console.log(undefinedToNull({a: undefined, b: 'BFE.dev'}))
console.log(JSON.stringify(undefinedToNull({a: undefined, b: { c: { d: undefined, e: ['BFE.dev', undefined]} }})))
// 1. implement curry

const join = (a, b, c) => {
    return `${a}_${b}_${c}`
 }
 const curriedJoin = curry(join)
console.log(curriedJoin(1, 2, 3))
console.log(curriedJoin(1)(2, 3))
console.log(curriedJoin(1, 2)(3)) 



 function curry(fn) {
    return function currying(...args) {
        if(args.length >= fn.length){
            return fn.apply(this, args)
        }else{
            return fn.bind(this,...args)
        }
    }
  }

// important points

// Applying the Function:
// If there are enough arguments, currying calls the original function fn using fn.apply(this, args).
// apply is a method that calls a function with a given this value and an array of arguments.
// It returns the result of calling fn with the provided arguments.
// Partial Application:
// If not enough arguments have been provided, the currying function returns a new function (fn.bind(this, ...args)) with the this context and the provided arguments partially applied.
// bind creates a new function that, when invoked, will have the same this value and partially applied arguments.
// This allows you to call the function later with the remaining arguments.
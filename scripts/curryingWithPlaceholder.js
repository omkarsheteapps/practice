// 10. find corresponding node in two identical DOM tree

function curryingWithPlaceholder(fn) {
    return function curry(...args) {
      let hasEnoughArgs = args.length >= fn.length;
      let hasPlaceholder = args.slice(0, args.length).includes(curryingWithPlaceholder.placeholder);
      let hasRequiredArgs = hasEnoughArgs && !hasPlaceholder;
  
      if (hasRequiredArgs) {
        return fn.apply(this, args);
      }
  
      return function (...newArgs) {
        const adjustedArgs = args.map((arg) => 
          arg === curryingWithPlaceholder.placeholder && newArgs.length 
          ? newArgs.shift() 
          : arg
        );
  
        return curry(...adjustedArgs, ...newArgs);
      };
    };
  }
  
  curryingWithPlaceholder.placeholder = Symbol();
  
  const join = (a, b, c) => `${a}_${b}_${c}`;
  const curriedJoin = curryingWithPlaceholder(join);
  
  console.log(curriedJoin(1, 2, 3)); 
  console.log(curriedJoin(curryingWithPlaceholder.placeholder, 2)(1, 3)); 
  console.log(curriedJoin(curryingWithPlaceholder.placeholder, curryingWithPlaceholder.placeholder, curryingWithPlaceholder.placeholder)(1)(curryingWithPlaceholder.placeholder, 3)(2)); 
  
// 5. implement throttle() with leading & trailing option
// 4. implement basic throttle()


// 1. Throttling based on count

// function throttle(func, count){

//     let counter = 0;

//     return function(...args){
//         if(++counter !== count) return;
//         counter = 0;

//         func.apply(this,args)
//     }

// }

// function log(){
//     console.log('Hello world')
// }

// const throttling = throttle(log, 3)

// throttling()
// throttling()
// throttling()

// 2. Thottling based on time

// function throttle(func, delay){
//     let timer;
//     let lastCalled;

//     return function(...args){
//         if(!lastCalled){
//             func.apply(this,args)
//             lastCalled = Date.now()
//         }
//         else{
//             clearTimeout(timer);
//             timer = setTimeout(() => {
//                if(Date.now() - lastCalled > delay){
//                 func.apply(this, args)
//                 lastCalled = Date.now()
//                } 
//             },delay - (Date.now() - lastCalled))
//         }

//     }

// }


// Throttling based on leading and trailing

function throttle(func, delay, options = {leading: true, trailing: true}){

    let lastTimerId;
    let lastArgs;

    return function(...args){
        const {leading, trailing} = options;

        const waitFn = () => {
            if(trailing && lastArgs){
                func.apply(this, lastArgs)
                lastArgs = null;
                lastTimerId = setTimeout(waitFn, delay)
            }else{
                lastTimerId = null
            }
        }

        if(leading && !lastTimerId){
            func.apply(this, args)
        }else{
            lastArgs = args
        }

        if(!lastTimerId){
            lastTimerId = setTimeout(waitFn,delay)
        }

    }

}
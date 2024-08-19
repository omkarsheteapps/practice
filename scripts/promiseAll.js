//  implement `Promise.all()`

function promiseAll(promises) {
    let completedPromises = 0;
    let results = []
    
    return new Promise((resolve, reject) => {
        for(let i =0; i<promises.length;i++){
            let promise = promise[i]

            promise.then(value => {
                completedPromises++
                results[i] = value

                if(completedPromises === promises.length){
                    resolve(results)
                }
            }).catch(error => {
                reject(error)
            })

        }
    })
}
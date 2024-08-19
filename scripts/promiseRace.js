function promiseRace(promises){
    return new Promise((resolve, reject) => {
        for(let i=0;i< promises.length;i++){
            let promise = promises[i]

            promise.then((value) => {
                resolve(value)
            }).catch(error => {
                reject(error)
            })
        }
    })
}
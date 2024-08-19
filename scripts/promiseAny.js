function promiseAny(promises){

    let errors = []

    return new Promise((resolve, reject) => {
        for(let i=0;i<promises.length;i++){
            let promise = promises[i];

            promise.then(value => {
                resolve(value)
            }).catch(error => {
                errors[i] = error
                if(errors.length === promises.length){
                    reject(new AggregateError('No promise was reolved', errors))
                }
            })
        }
    })
}
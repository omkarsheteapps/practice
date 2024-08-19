function promiseAllSettled(promises){
    let results = [];
    let completedPromises = 0

    return new Promise((resolve, reject) => {
        for(let i=0;i<promises.length;i++){
            let promise = promises[i]

            promise.then(value => {
                completedPromises++;
                results[i] = {status: 'fulfilled', value}

                if(completedPromises === promises.length){
                    resolve(results)
                }
            }).catch(reason => {
                completedPromises++
                results[i] = {status: 'rejected', reason}
                if(completedPromises === promises.length){
                    resolve(results)
                }
            })
        }
    })
}


const promise1 = Promise.resolve(50);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(() => reject('Error occurred'), 1000)
);
const promises = [promise1, promise2];

promiseAllSettled(promises)
  .then(results => {
    results.forEach(result => {
      console.log(result.status, result.value);
    });
  })
  .catch(error => {
    console.error(error);
  });

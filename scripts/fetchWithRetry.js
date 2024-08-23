async function fetchWithRetry(url,params,n){
    try{
        return await fetch(url,params)
    }catch(err){
        if(n === 0){
            throw err
        }

        return fetchWithRetry(url,params,n-1)
    }
}

let URL = `https://jsonplaceholder1.typicode.com/posts`;

async function getData(){
    try {
      let resp = await fetchWithRetry(URL, {}, 5);
      let res = await resp.json();
      console.log(res);
     
    } catch (ex) {
      console.log(ex);
    }
}
getData();
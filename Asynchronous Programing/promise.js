const promise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("The promise is resolved");
    },2000);
})

promise.then((resolve)=>{
    console.log(resolve);
});
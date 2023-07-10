function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
async function myFun() {
    console.log('Hello');
    await delay(2000)
    console.log('World');
    
}
  
myFun()
    .then(result => {
      console.log(result); 
    })
    .catch(error => {
      console.error(error);
});
  
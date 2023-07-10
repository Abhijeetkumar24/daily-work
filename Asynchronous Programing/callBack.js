function myFun(callback) {

    setTimeout(() => {
      callback(8,null);
    },2000);
    
}
  
function output(num, error) {
    
    if (error) {
      console.log(error);
    } else {
      console.log(num);
    }
}
  
myFun(output);
  
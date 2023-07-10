function delay(){
    return setTimeout(()=>{
        console.log("hello world")
    },3000);
}

function log(){
    console.log("morning");
}

async function myFun(){
    await delay();
    await log();
}

myFun();
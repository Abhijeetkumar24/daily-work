console.log('first');

setTimeout(()=> {
    console.log('second');
}, 0)
setTimeout(()=> {
    console.log('third');
}, 0)
Promise.resolve('third').then(val => {
    console.log(val);
})

setImmediate(()=> {
    console.log('forth');
})

console.log('last');
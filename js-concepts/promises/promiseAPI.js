let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("value 1")
    },5000)
})

let p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        // resolve("value 2")
        reject(new Error("error occured"))
    },2000)
})

let p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("value 3")
    },3000)
})

// p1.then((value)=>{
//     console.log(value)
// })
// p2.then((value)=>{
//     console.log(value)
// })
// p3.then((value)=>{
//     console.log(value)
// })

/*---------------------Promise.all() Method-------------------*/
// let promise_all = Promise.all([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value)
// })

// /*---------------------Promise.allSettled() Method-------------------*/
// let promise_all = Promise.allSettled([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value)
// })

/*---------------------Promise.race() Method-------------------*/
// let promise_all = Promise.race([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value)
// })

// /*---------------------Promise.any() Method-------------------*/
// let promise_all = Promise.any([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value)
// })

/*---------------------Promise.resolve() Method-------------------*/
// let pr = Promise.resolve(77)
// pr.then((value)=>{
//     console.log(value)
// })

/*---------------------Promise.reject() Method-------------------*/
// let pr = Promise.reject(new Error("fat gya yha"))
// pr.then((value)=>{
//     console.log(value)
// })
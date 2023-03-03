new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("after 2 seconds")
        resolve(55)
    },2000)
})
.then((value)=>{
    console.log(value)
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("promise 2")
        },2000)
    })
    // return p2
}).then((value)=>{
    console.log(value)
    console.log("balle balle")
    return 777
}).then((value)=>{
    console.log(value)
})

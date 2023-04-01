const ten = new Promise((resolve, reject) => {
    resolve(10);
});
ten.then((result) => {
  console.log(result)  // 10
  return result + 10
})
.then((result) => {
  console.log(result)  // 20
  return result * 2
})
.then((result) => {
  console.log(result)   // 40
  return result + 10
})
.then((result) => {
  console.log(result)  // 50
})

//=============================== Another Exammple ============================

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

// let promise = new Promise(function(resolve, reject){
//     console.log("Hello promise")
//     resolve(7)
// })

// console.log("Hello 1")

// setTimeout(()=>{
//     console.log("This is setTimeout after 2 sec")
// },2000)
// setTimeout(()=>{
//     console.log("This is another one after 2 sec")
// },2000)

// console.log("Hello 2")
// console.log(promise)


//=================================================
let promise = new Promise(function(resolve, reject) {
    // Got the water
    resolve('water'); // An assurance of getting the water successfully

    // reject(new Error("Disaster"));
})
.then((result) => {
    console.log(result)
})
.catch((error) => {
    console.log("Error is :", error);
})

let promise = new Promise(function(resolve, reject){
    console.log("Hello promise")
    resolve(7)
})

console.log("Hello 1")

setTimeout(()=>{
    console.log("This is setTimeout after 2 sec")
},2000)
setTimeout(()=>{
    console.log("This is another one after 2 sec")
},2000)

console.log("Hello 2")
console.log(promise)

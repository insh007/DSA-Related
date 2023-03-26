/*
1. Promise.any() method takes an array of Promises as input and returns a new Promise that resolves as soon as any one of the Promises in the input array is resolved. 
2. If all of the Promises are rejected, then Promise.any() returns a rejected Promise with an AggregateError
*/
const red = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("after 1 sec")
        // resolve("red")
        reject(new Error("oops error"))
    }, 1000)
})
const green = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("after 3 sec")
        resolve("green")
    }, 3000)
})
const blue = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("after 5 sec")
        resolve("blue")
    }, 5000)
})

const testAny = async () => {
    const colors = await Promise.any([red, green, blue])
    console.log(colors)
}
testAny()
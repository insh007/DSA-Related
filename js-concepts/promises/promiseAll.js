/*
1. Promise.all() method takes an array of promises and returns a promise that is fulfilled when all of the
promises in array are fulfilled.
2. If array of the input promises reject or (error out) then Promise.All() rejects immediately.
3. Promise.all() executes multiple promises in parallel.
*/
const red = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("after 1 sec")
        resolve("red")
    }, 1000)
})
const green = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("after 3 sec")
        resolve("green")
        // reject(new Error("oops error"))
    }, 3000)
})
const blue = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("after 5 sec")
        resolve("blue")
    }, 5000)
})

const testAll = async () => {
    const colors = await Promise.all([red, green, blue])
    console.log(colors)
}
testAll()
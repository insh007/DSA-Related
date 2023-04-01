/*
1. As the name suggests, it is the race between all the input promises, and the fastest promise wins. 
2. Promise.race() method takes an array of promises as input and returns a new promise when the fastest promise resolves.
3. If the fastest promise rejects(or error out), the Promise.race API method returns a rejected promise.
*/
const red = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("after 1 sec")
        resolve("red")
        // reject(new Error("oops error"))
    }, 1000)
})
const green = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("after 3 sec")
        // resolve("green")
        reject(new Error("oops error"))
    }, 3000)
})
const blue = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("after 5 sec")
        resolve("blue")
    }, 5000)
})

const testrace = async () => {
    const colors = await Promise.race([red, green, blue])
    console.log(colors)
}
testrace()
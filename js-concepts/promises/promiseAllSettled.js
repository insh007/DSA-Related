/**
 Promise.allSettled method() takes an array of promises as input and returns an array of settled promises, including their state, value, and the reason for an error.
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

const testAllSettled = async () => {
    const colors = await Promise.allSettled([red, green, blue])
    console.log(colors)
    // for(let i=0; i<colors.length; i++){
    //     console.log(colors[i])
    // }
    colors.forEach((val) => {
        console.log(val)
    })
}
testAllSettled()
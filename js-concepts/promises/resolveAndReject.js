// const green = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("resolve value...")
//     },1000)
// })

// Another way creating promise directly using Promise.resolve()
const green = Promise.resolve("resolve value...")

// In similar way we can use Promise.reject
// so it is equal what we passed in the first syntax arguments as (resolve, reject)

// console.log(green)  // Promise { <pending> }

// green.then((result) => console.log(result))    // resolve value...

// OR
const result = async () => {
    // const res = await Promise.resolve(green)  // resolve value...
    //OR
    const res = await green   // resolve value...
    console.log(res)
}
result()
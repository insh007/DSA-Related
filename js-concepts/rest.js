let arr = [22,55,33,344,90]
let [a,b, ...rest] = arr
// console.log(a)
// console.log(b)
// console.log(b ,...rest)

//-------------------
let arr1 = [44, ,33, ,55]
let [x, z,y, ,c] = arr1
// console.log(z)

//------------ REST ------------------
function fn(...rest){
    console.log(...rest)
}
fn(5555,9999,8888)

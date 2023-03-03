let arr1 = [1,22,44,55]
// let arr2 = [...arr1]
// console.log(arr2)  // copy elements

let arr3 = [ 577,33,77,33]
// console.log(arr1+arr3)

let arr4 = [...arr1, ...arr3]
// console.log(arr4)

//----- SPREAD -----------
function fn(a,b,c,d){
    return a+b+c+d
}
let ar = [3,4,3,4]
console.log(fn(...ar))

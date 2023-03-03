const obj = {
    fNmame : "Inshad",
    lName : "Ali" 
}
// console.log(obj) // print object

// console.log(obj.lName) // printing key value

obj.fNmame = "Khan"
// console.log(obj) // update key fNmae

obj.RollNo = "12"
// console.log(obj) //  Adding key

delete obj.fNmame
// console.log(obj)



//-------------
let arr = [4,3, 'Inshad',33,55, 88.99]
// console.log(arr[arr.length-1])  // last element prints

// console.log(arr)

// push case scenario
let a = [1,2,3]
let b = [...a]

a.push(10)
console.log(b)


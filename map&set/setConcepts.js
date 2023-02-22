const set = new Set()

// Note : set always contain unique values 

// Adding values to set
set.add('this is cool')
set.add("awesome")
set.add(true)
set.add("awesome")
set.add(99)

// console.log(set)
// console.log(set.size)
// console.log(typeof set)

//give array to set constructor
const myset = new Set([55, false, "Ali", 55])
// console.log(myset)


// check values present in set or not
// console.log(set.has(99)) // true -> present

// delete a value 
// set.delete(true)
// set.delete("awesome")
// console.log(set)


// iterating set
for(let item of set){
    // console.log(item)
}


// forEach()
set.forEach((item) => {
    // console.log(item)
})


let arr = Array.from(set)
// console.log(arr)


// Q: remove duplicate elements  [2,4,3,2,4,55,33,55,33]
let ar = [2,4,3,2,4,55,33,55,33]
let set1 = new Set()
for(let item of ar){
    set1.add(item)
}
let res = Array.from(set1)
// console.log(set1)
// console.log(res)
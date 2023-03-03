/*----------------------------------------------------------------------- */
// shallow copy in OBJECT using spread & Object.assign()
// NOTE : Shallow copy: means that only the first level of the object is copied. Deeper levels are referenced.
const object = {
    name : "Inshad",
    city : {
        pincode : 203001
    }
}

let shallowCopy1 = {...object}
let shallowCopy2 = Object.assign({}, object)

shallowCopy1.name = "Jhon"
shallowCopy1.city.pincode = 110075

shallowCopy2.name = "Jhon"
shallowCopy2.city.pincode = 110075

// console.log(object);       // { name: 'Inshad', city: { pincode: 110075 } }
// console.log(shallowCopy1); // { name: 'Jhon', city: { pincode: 110075 } }
// console.log(shallowCopy2); // { name: 'Jhon', city: { pincode: 110075 } }


//shallow copy in array
let arr = [1, 5, [3, 2], 7, 8]
let a = [...arr]
a[0] = 55    // first level that is change will not reflect
a[2][0] = 100  // deeper(second) level that is change will reflect 
// console.log(arr); // [ 1, 5, [ 100, 2 ], 7, 8 ]
// console.log(a)    // [ 55, 5, [ 100, 2 ], 7, 8 ]



// DEEP COPY in OBJECT
// Note : Deep copy: means that all levels of the object are copied. This is a true copy of the object.
const obj = {
    name : "Inshad",
    city : {
        pincode : 203001
    }
}

let deepCopy =  JSON.parse(JSON.stringify(obj))

deepCopy.name = "Mohan"
deepCopy.city.pincode = 110075
  
console.log(obj);       // { name: 'Inshad', city: { pincode: 203001 } }
console.log(deepCopy);  // { name: 'Mohan', city: { pincode: '110075' } }

// DEEP copy in ARRAY

const array = [1, 5, [3, 2], 7, 8]

const deepCp = JSON.parse(JSON.stringify(array))

deepCp[0] = 50
deepCp[2][0] = 150

// console.log(array);    // [ 1, 5, [ 3, 2 ], 7, 8 ]
// console.log(deepCp);   // [ 50, 5, [ 150, 2 ], 7, 8 ]

/*----------------------------------------------------------------------- */







// ========================---------------------========================

// // ----------- shallow copy -------------
// const a = [1,2]
// const b = a
// const c = [...a]
// // console.log(c)


// // console.log(b === a) // ture -------> same address
// // console.log(a === c) // flase -------> different address

// // a.push(5)
// // console.log(b)  // [1,2,5]
// // console.log(a)  // [1,2,5]
// // console.log(c)  // [1,2]


// c.push(3)
// console.log(a) 
// // console.log(c)


// // ----------- Deep copy -------------
// // const ar = [1,2,[3,4]]
// // const deep = JSON.parse(JSON.stringify(ar)) // output ->   [1,2,[3,4]]  (Deep copy) 
// // const s = ar   // output ->   [1,3,[3,4]] (Normal)
// // console.log(deep)    // output ->   [1,2,[3,4]]  (Deep copy)
// // deep[2].push(90)   
// // console.log(deep)     // output -> [1,2,[3,4,90]]
// // console.log(ar)       // output -> [1,2,[3,4]]


// // s[2].push(77)
// // console.log(s)  // output  ->  [ 1, 2, [ 3, 4, 77 ] ]
// // console.log(ar)    // output  ->  [ 1, 2, [ 3, 4, 77 ] ]



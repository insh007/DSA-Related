let arr = [44,33,444, 11,110,330]
// console.log(arr.sort());


// let res = arr.sort(function(a,b){
//     return b-a
// })

// console.log(res);


// ----------------- arrow function -------------
let res = arr.sort((a,b)=>a-b)

console.log(res);
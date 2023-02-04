let arr = [33,55,333,11,110]
// let m = arr.sort()

// let s  = arr.sort(function(a,b){
//     return a-b
// })
// console.log(m)


//-------------------------
// Brute force, Time complexity - O(n^2)
// for(let i=0; i<arr.length; i++){
//     for(let j=i+1; j<arr.length; j++){
//         if(arr[i]>arr[j]){
//             let temp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = temp
//         }
//     }
// }
// console.log(arr)  // [ 11, 33, 55, 110, 333 ] 

//------------------Another approach with single loop
for(let i=0; i<arr.length; i++){
    if(arr[i]>arr[i+1]){
        let temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
        i = -1
    }
}
console.log(arr)   // confusion in flow of code
// //Problem : Find pairs of elements whose sum is equal to target k

// let arr = [7,2,4,6,9,11,34,3,2,1]
var arr = [ 1, 5, 7, -1, 5 ];
// let arr =  [1,1,1]
// let arr = [1,2,3]
let k = 6
function gtePairs(arr,k){
    let map = new Map()
    let res = []
    let count = 0
    for(let i=0; i<arr.length; i++){
        let compliment = k - arr[i]
        if(map.has(compliment)){
            // count += map.get(compliment)
            res.push([arr[i],compliment])
        }
        map.set(arr[i], (map.get(arr[i]) || 0) + 1)
    }
    return res
    // return count
}

console.log(gtePairs(arr, k))
// console.log(map)




// check input  number is integre or not 
// function checkInteger(n){
//     if(Number.isInteger(n)){
//         return true
//     }
//     return false
// } 
// console.log(checkInteger(12.5))  // false
// console.log(checkInteger(12))    // true

// wouhout using inbuilt
// check input  number is integre or not 
// function checkInteger(n){
//     if(n % 1 == 0){       // will be an integer 
//         return true
//     }
//     return false
// } 
// console.log(checkInteger(155.55))   // false
// console.log(checkInteger(15))   // true
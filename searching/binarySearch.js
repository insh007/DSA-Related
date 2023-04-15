//-------------------- Using Loop -----------------
// let arr = [1, 3, 7, 9, 12, 17, 22, 30, 45]

// let x = 22

// function binary(arr){
//     let left = 0
//     let right = arr.length-1
    
//     while(left<=right){
//         let mid = parseInt((left+right)/2)
//         if(x == arr[mid]){
//             return `${x} is present at index ${mid}`
//         }
//         if(x > arr[mid]){
//             left = mid + 1
//         }
//         else{
//             right = mid-1
//         }
//     }
//     return -1
// }
// console.log(binary(arr))
// TC
// worst case -> O(logn)
// average case -> O(logn)
// best case -> O(1)
// SC -> O(1)


//-------------------- Using Recursion -----------------
let arr = [1, 3, 7, 9, 12, 17, 22, 30, 45]
let target = 45
let left = 0
let right = arr.length - 1

function rec(arr, left , right) {

    if (left > right) return false // base

    let mid = left + Math.floor((right-left)/2)
    if (target == arr[mid]) return `${target} is present at index ${mid}`

    else if (target < arr[mid]) {
        return rec(arr, left, mid-1)
    }

    else {
        return rec(arr, mid+1, right)
    }
}
console.log(rec(arr, left, right))
// TC
// worst case -> O(logn)
// average case -> O(logn)
// best case -> O(1)
// SC -> O(logn) // maximum recursive open function would be equal to the lenght of the call stack i.e., logn
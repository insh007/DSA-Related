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
function binary(arr, target ,left, right){
    // base 
    if(left > right) return -1

    // recursive
    let mid = parseInt((left+right)/2)
    if(target == arr[mid]) return `${target} is present at index ${mid}`

    if(target > arr[mid]){
        left = mid+1      
    }
    else{
        right = mid-1
    }

    return binary(arr, target ,left, right)
}
let arr = [1, 3, 7, 9, 12, 17, 22, 30, 45]
let target = 7
let left = 0
let right = arr.length-1
console.log(binary(arr,target,left,right))
// TC
// worst case -> O(logn)
// average case -> O(logn)
// best case -> O(1)
// SC -> O(logn) // maximum recursive open function would be equal to the lenght of the call stack i.e., logn
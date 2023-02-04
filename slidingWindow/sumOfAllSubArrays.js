/*-------------------------- Sum of all Subarrays of Size K ---------------------------------*/
// Given an array arr and an integer K, the task is to calculate the sum of all subarrays of size K.
// Examples: 
// Input: arr[] = {1, 2, 3, 4, 5, 6}, K = 3 
// Output: 6 9 12 15
// All subarrays of size k and their sum: 
// Subarray 1: {1, 2, 3} = 1 + 2 + 3 = 6 
// Subarray 2: {2, 3, 4} = 2 + 3 + 4 = 9 
// Subarray 3: {3, 4, 5} = 3 + 4 + 5 = 12 
// Subarray 4: {4, 5, 6} = 4 + 5 + 6 = 15 

//Method:1 -> simple approach (Naive approach)

// function findSubArraysSum(arr,k){
//     let result = []
//     for(let i=0; i<=arr.length-k; i++){
//         let sum = 0
//         for(let j=i; j<k+i; j++){
//             sum = sum + arr[j]
//         }
//         result.push(sum)
//     }
//     return result
// }
// console.log(findSubArraysSum([1, 2, 3, 4, 5, 6], 3))  // Time complexity: O(N*K) & space complexity: O(1)

//Method 2: -> Sliding Window (recommened)
// let arr = [1, 2, 3, 4, 5, 6]
// let k = 3
// Total window - 4 -> (1, 2, 3), (2, 3, 4), (3, 4, 5), (4, 5, 6)  
function findSubArraysSum(arr,k){
    // let result = []
    let sum = 0
    // sum of first window -> (1, 2, 3)
    for(let i=0; i<k; i++){
        sum = sum + arr[i]
    }
    console.log(sum)
    // sum of remaining window -> (2, 3, 4), (3, 4, 5), (4, 5, 6)
    for(let i=k; i<arr.length; i++){
        sum = sum  + arr[i] - arr[i-k]
        console.log(sum)
    }
    // return result
}
findSubArraysSum([1, 2, 3, 4, 5, 6], 3)  // Time complexity: O(N) & space complexity: O(1)
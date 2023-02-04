/*-------------- SLIDING WINDOW ----------------*/

//Find : maximum sum of a subarray of size k 
function findMaxSum(arr,k){
    //code here
    let sum = 0
    let maxSum = 0
    for(let i=0; i<k; i++){
        sum += arr[i]
    }
    maxSum = sum
    for(let i=k; i<arr.length; i++){
        sum = (sum + arr[i]) - arr[i-k]
        maxSum = Math.max(maxSum, sum)
    }
    return maxSum
 }

//Find : Largest product of a subarray of size k 
// function findMaxProduct(arr,k){
//     //code here
//     let product = 1
//     let maxProduct = 1
//     for(let i=0; i<k; i++){
//         product *= arr[i]
//     }
//     maxProduct = product
//     for(let i=k; i<arr.length; i++){
//         product = (product * arr[i]) / arr[i-k]
//         maxProduct = Math.max(maxProduct, product)
//     }
//     return maxProduct
//  }
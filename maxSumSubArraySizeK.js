// Problem: Max Sum Subarray of size K

// Example 1:
// Input:
// N = 4, K = 2
// Arr = [100, 200, 300, 400]
// Output:
// 700
// Explanation:
// Arr3  + Arr4 =700,
// which is maximum


// (Using Sliding Window of fixed size (k))
let Arr = [100, 200, 300, 400]
function maximumSumSubarray(K, Arr, N) {
    //code here
    let sum = 0
    let maxSum = 0
    
    for(let i=0; i<K; i++){
        sum = sum + Arr[i]
    }
    // maxSum =  Math.max(maxSum, sum)
    //OR
    maxSum = sum
    
    for(let i=K; i<Arr.length; i++){
        sum = sum + Arr[i] - Arr[i-K] //i-K ->Delete previous window element corresponding to current window element
        maxSum = Math.max(maxSum, sum)
    }
    return maxSum
}
// console.log(maximumSumSubarray(2, [100, 200, 300, 400], 4))
// console.log(maximumSumSubarray(3, [11, 4, 3, 10, 5, 6, 4], 7))
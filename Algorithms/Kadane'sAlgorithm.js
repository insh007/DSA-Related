// Leetcode 53. Maximum Subarray
// Given an integer array nums, find the subarray with the largest sum, and return its sum.
// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// Using Kadane's algorithm
var maxSubArray = function(nums) {
    let currentSum = nums[0];
    let maxSum = nums[0];

    for(let i=1; i<nums.length; i++){
        currentSum += nums[i]

        // if(currentSum < nums[i]){
        //     currentSum = nums[i]
        // }
        //---OR
        currentSum = Math.max(currentSum , nums[i])  // make fast

        // if(currentSum > maxSum){
        //     maxSum = currentSum 
        // }
        //---OR
        maxSum = Math.max(maxSum, currentSum )
    }
    return maxSum   // TC -> O(n) & SC -> O(1)


    //Brute Force -> O(n^2)
    // let maxSum = 0
    // for(let i=0; i<nums.length; i++){
    //     let sum = 0
    //     for(let j=i; j<nums.length; j++){
    //         sum += nums[j]
    //         if(sum > maxSum){
    //             maxSum = sum
    //          }
    //     }
    // }
    // return maxSum
};
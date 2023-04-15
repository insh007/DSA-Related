// Leetcode 53. Maximum Subarray
// Given an integer array nums, find the subarray with the largest sum, and return its sum.
// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// Using Kadane's algorithm
var maxSubArray = function(nums) {
    let maxSum = nums[0]  // maximum sum seen so far
    let currSum = 0   // This will track current sum

    for(let i=0; i<nums.length; i++){
//if currSum is negative then it will not contribute to the maxSum then set negative value to as 0        
        if(currSum < 0) {
            currSum = 0
        }
        currSum = currSum + nums[i] //keep track array to check currSum

        maxSum = Math.max(currSum, maxSum) //update maxSum seen so far if currSum maximum than maxSum 
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
/*--------------------------- Maximum of all subarrays of size K ----------------------------*/

// Given an array and an integer K, find the maximum for each and every contiguous subarray of size K.
// Examples : 
// Input: arr[] = {1, 2, 3, 1, 4, 5, 2, 3, 6}, K = 3 
// Output: 3 3 4 5 5 5 6
// Explanation: Maximum of 1, 2, 3 is 3
//              Maximum of 2, 3, 1 is 3
//              Maximum of 3, 1, 4 is 4
//              Maximum of 1, 4, 5 is 5
//              Maximum of 4, 5, 2 is 5 
//              Maximum of 5, 2, 3 is 5
//              Maximum of 2, 3, 6 is 6

//Method:1 -> simple approach (Naive approach)
// function maxAllSubArrays(arr,k){
//     let result = []
//     for(let i=0; i<=arr.length-k; i++){
//         let max = arr[i]
//         for(let j=1; j<k; j++){
//             if(arr[i+j] > max){
//                 max = arr[i+j]
//             }
//         }
//         result.push(max)
//     }
//     return result
// }
// console.log(maxAllSubArrays([1, 2, 3, 1, 4, 5, 2, 3, 6], 3))


// Using Sliding Window -> DeQueue
var maxSlidingWindow = function(nums, k) {
    // First approach
     let Qi = []   // store indexex
     let result = []
     
     for(let i=0; i<k; i++){
 
         // Qi index corresponding nums array last element
         while((Qi.length != 0) && nums[Qi[Qi.length-1]] < nums[i]){
             Qi.pop()  // delete index from lase
         }
             Qi.push(i)  // push index to last
     }
 
     for(let i=k; i<nums.length; i++){
         result.push(nums[Qi[0]])  // first element will be largest then push into result
 
         //i-k+1 -> window bound such that i=right bound and i-k+1 = left bound & Qi[0] out of bound index corresponding to window
         while((Qi.length != 0) && Qi[0] < i-k+1){
             Qi.shift()
         }
         // Qi index corresponding nums array last element
         while((Qi.length != 0) && nums[Qi[Qi.length-1]] < nums[i]){
             Qi.pop() // delete index from lase
         }
             Qi.push(i)  // push index to last
     }
     result.push(nums[Qi[0]])
     return result  // first element will be largest then push into result
 
 
     // short approach
     // let deque = []
     // let answer = []
 
     // for(let i=0; i<nums.length; i++){
 
     //     while(deque.length && deque[0] < i-k+1){
     //         deque.shift()
     //     }
 
     //     while(deque.length && nums[deque[deque.length-1]] < nums[i]){
     //         deque.pop()
     //     }
 
     //     deque.push(i)
 
     //     if(i>=k-1){
     //         answer.push(nums[deque[0]])
     //     }
 
     // }
     // return answer
 };
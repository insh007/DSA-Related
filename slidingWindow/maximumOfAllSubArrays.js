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


// // Leetcode tested solution 
// var maxSlidingWindow = function(nums, k) {
//     let Qi = []
//     let result = []
//     let i
//     for(i=0; i<k; i++){
//         while((Qi.length != 0) && nums[i] >= nums[Qi[Qi.length-1]]){
//             Qi.pop()
//         }
//             Qi.push(i)
//     }

//     for(i; i<nums.length; i++){
//         result.push(nums[Qi[0]])

//         while((Qi.length != 0) && Qi[0] <= i-k){
//             Qi.shift()
//         }
//         while((Qi.length != 0) && nums[i] >= nums[Qi[Qi.length-1]]){
//             Qi.pop()
//         }
//             Qi.push(i)
//     }
//     result.push(nums[Qi[0]])
//     return result
// };



// GFG Explanation
// We have used array in javascript to implement methods of dequeue
// A Dequeue (Double ended queue) based
// method for printing maximum element of
// all subarrays of size k
function printKMax(arr, n, k) {
    // creating string str to be printed at last
    let str = ""
    let res = []

    // Create a Double Ended Queue,
    // Qi that will store indexes
    // of array elements
    // The queue will store indexes
    // of useful elements in every
    // window and it will
    // maintain decreasing order of
    // values from front to rear in Qi, i.e.,
    // arr[Qi.front[]] to arr[Qi.rear()]
    // are sorted in decreasing order
    // std::deque<int> Qi(k);
    let Qi = [];

    /* Process first k (or first window)
     elements of array */
    let i;
    for (i = 0; i < k; ++i) {

        // For every element, the previous
        // smaller elements are useless so
        // remove them from Qi
        while ((Qi.length != 0) && arr[i] >=arr[Qi[Qi.length - 1]]){
            // Remove from rear
            Qi.pop();

        }
        // Add new element at rear of queue
        Qi.push(i);

        }


    // Process rest of the elements,
    // i.e., from arr[k] to arr[n-1]
    for (i; i < n; ++i) {

        // The element at the front of
        // the queue is the largest element of
        // previous window, so print it
        // str += arr[Qi[0]] + " ";
        res.push(arr[Qi[0]])
        // console.log(arr[Qi[0]] + " ");

        // Remove the elements which
        // are out of this window
        while ((Qi.length != 0) && Qi[0] <= i - k) {

            Qi.shift();
        }

        // Remove from front of queue

        // Remove all elements
        // smaller than the currently
        // being added element (remove
        // useless elements)
        while ((Qi.length != 0) && arr[i] >= arr[Qi[Qi.length - 1]]) {

            Qi.pop();

        }
        // Add current element at the rear of Qi
        Qi.push(i);
    }

    // Print the maximum element
    // of last window
    // str += arr[Qi[0]];
    res.push(arr[Qi[0]])
    // console.log(str);
    return res
}

console.log(printKMax([1, 2, 3, 1, 4, 5, 2, 3, 6], 9, 3))
// printKMax([1, 3, -1, -3, 5, 3, 6, 7], 8, 3)
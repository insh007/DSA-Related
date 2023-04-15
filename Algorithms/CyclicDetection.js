// Leetcode - 287. Find the Duplicate Number
// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
// There is only one repeated number in nums, return this repeated number.
// You must solve the problem without modifying the array nums and uses only constant extra space.
// Example 1:
// Input: nums = [1,3,4,2,2]
// Output: 2

//point-> 1: array elements will be greater than 1 and less than or equal to its length.
//  2: There is only one repeated number and it can repeat as equal to the size of the array.(impt)
var findDuplicate = function(nums) {
    let slow = nums[0];   // assume at first element
    let fast = nums[0];   // assume at first element
    while (true) {
        slow = nums[slow];  //one step at a time
        fast = nums[nums[fast]];  //two step at a time
        if (slow === fast) {    // means cycle is present
            break;
        }
    }
    // now cycle is present then we have to find the intersection point of cycle by assuming again slow at first element and now both slow and fast moves one step at a time then they will definitely meets again like slow == fast then it means duplicate element is present and it will return as slow 
    slow = nums[0];        
    while (slow !== fast) {
        slow = nums[slow];  //one step at a time
        fast = nums[fast];   //one step at a time
    }
    return slow;

    // working but due to constant extra space not recommeneded
    // let map = new Map()
    // for(let i=0; i<arr.length; i++){
    //     map.set(arr[i], (map.get(arr[i]) || 0) + 1) // assigning values to map as keys and values
    // // OR ->  // assigning values to map as keys and values
    // // if( map.get(arr[i]) == undefined) map.set(arr[i], 1)
    // // else map.set(arr[i], map.get(arr[i]) + 1)
    // }
    // let res = []
    // for(let [key,value] of map){
    //     if(value > 1){
    //         res.push(key)
    //     }
    // }
    // return res
};
// "Floyd's Tortoise and Hare" algorithm, also known as the "Cycle Detection" algorithm. This algorithm is based on the idea that if there is a cycle in a linked list, then two pointers moving at different speeds will eventually meet at a node that is part of the cycle.

// In this problem, we can think of the array as a linked list where the value at index i is the "next" node in the list. If there is a duplicate number, then there must be a cycle in the list. To find the duplicate number, we can use two pointers, one moving at a slow pace (one step at a time) and the other moving at a fast pace (two steps at a time). When the two pointers meet, we know that there is a cycle and we have found the duplicate number.

/*-------------------------------------------------------------------------------------------------------------- */
/*-------------------------------------------------------------------------------------------------------------- */

// Leetcode - 202. Happy Number
// Write an algorithm to determine if a number n is happy.
// A happy number is a number defined by the following process:
// *Starting with any positive integer, replace the number by the sum of the squares of its digits.
// *Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which         does not include 1.
// *Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.


// Helper funtion to calculate sum of the squares of its digits
function calSum(n){
    let sum = 0
    while(n>0){
        let last_digit = n%10  // this will give last digit of a number like 9 in case of 19 first time 
        sum = sum + (last_digit*last_digit) // here we do calculation of sum of square of digits
        n = Math.floor(n/10) // remove the last digit like remove 9 in case of first time in 19
    }
    return sum
}

// using cycle detection algorithm
var isHappy = function(n) {
    let slow = n
    let fast = n

    while(true){
        slow = calSum(slow) 
        fast = calSum(calSum(fast))
        if(slow == fast){
            break
        } 
    }

    slow = n
    while(slow != fast){
        slow = calSum(slow) 
        fast = calSum(fast)
    }

/*======================== OR ====================== */

    // do{
    //     slow = calSum(slow) 
    //     fast = calSum(calSum(fast))
    // }while(slow != fast)

/*======================== OR ====================== */    

    return slow==1
}
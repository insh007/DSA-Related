// Given an array A[] of size N and a positive integer K, find the first negative integer for each and every window(contiguous subarray) of size K.
// Example 1:
// Input : 
// N = 5
// A[] = {-8, 2, 3, -6, 10}
// K = 2
// Output : 
// -8 0 -6 -6
// Explanation :
// First negative integer for each window of size k
// {-8, 2} = -8
// {2, 3} = 0 (does not contain a negative integer)
// {3, -6} = -6

// {-6, 10} = -6
let nums = [-8, 2, 3, -6, 10]
let k = 2
function printFirstNegativeInteger(k, nums) {
    // code here
    let deque = []
    let answer = []
    
    for(let i=0; i<k; i++){
        if(nums[i] < 0){
            deque.push(i)
        }
    }
    
    for(let i=k; i<nums.length; i++){
        if(deque.length != 0){
            answer.push(nums[deque[0]])
        }else{
            answer.push(0)
        }
        
        
        while(deque.length!=0 && deque[0] < i-k+1){
            deque.shift()
        }
        
        if(nums[i] < 0){
            deque.push(i)
        }
    }
        
        if(deque.length != 0){
            answer.push(nums[deque[0]])
        }else{
            answer.push(0)
        }
    return answer
}
console.log(printFirstNegativeInteger(2, nums))
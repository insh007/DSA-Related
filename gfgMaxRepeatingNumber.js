// Given an array Arr of size N, the array contains numbers in range from 0 to K-1 where K is a positive integer and K <= N. Find the maximum repeating number in this array. If there are two or more maximum repeating numbers return the element having least value.

// Example 1:
// Input:
// N = 4, K = 3
// Arr[] = {2, 2, 1, 2}
// Output: 2
// Explanation: 2 is the most frequent
// element.

// Example 2:
// Input:
// N = 6, K = 3
// Arr[] = {2, 2, 1, 0, 0, 1}
// Output: 0
// Explanation: 0, 1 and 2 all have same
// frequency of 2.But since 0 is smallest,
// you need to return 0.

function maxRepeating(arr){
    //code here
    let map = new Map()
    let maxFreq = 0
    let ans = 0
    for(let i=0; i<arr.length; i++){
        map.set(arr[i], (map.get(arr[i]) || 0) +1)
    }
    for(let [key, value] of map){
        if(value > maxFreq){
            maxFreq = value
            ans = key
        }else if(value == maxFreq){
            if(key < ans){
                ans = key
            }
        }
    }
    return ans
}
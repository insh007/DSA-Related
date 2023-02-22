// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true


var containsNearbyDuplicate = function(nums, k) {
    // map approach
    let map = new Map()
    for(let i=0; i<nums.length; i++){
        if(map.has(nums[i]) && i-map.get(nums[i]) <= k){
            return true
        }
        map.set(nums[i], i)
    }
    return false

    // Using Object
    // let obj = {}
    // for(let i=0; i<nums.length; i++){
    //     if(nums[i] in obj && i - obj[nums[i]] <= k){
    //         return true
    //     }
    //     obj[nums[i]] = i
    // }
    // // console.log(obj)
    // return false

    // Brute force(worst approach)
    // for(let i=0; i<nums.length; i++){
    //     for(let j=0; j<nums.length; j++){
    //         if(i != j){
    //             if(nums[i] == nums[j]){
    //             let diff = Math.abs(i-j)
    //             if(diff <= k){
    //                 return true
    //             }
                
    //         }
    //         }
    //     }
    // }
    // return false
};
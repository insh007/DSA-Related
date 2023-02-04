// Find maximum sum of any two elements in an array without using sort(nlogn) or do in best T.C

// Method :  (maintain firstLargest and secondLargest) 
function sum(arr){
    let firstLarget = -Infinity
    let secondLarget = -Infinity
    for(let i=0; i<arr.length; i++){
        if(arr[i]>secondLarget){
            if(arr[i] > firstLarget){
                secondLarget = firstLarget
                firstLarget = arr[i]
            }else{
                secondLarget = arr[i]
            }
        }
    }
    return firstLarget+secondLarget
}
console.log(sum([-55, -7, -30, -3, -1, -34]))  // TC -> O(n) and SC -> O(1)



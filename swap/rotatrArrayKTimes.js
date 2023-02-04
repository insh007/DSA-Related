// Q: write a program to  cyclically rotate an array at k times

let arr = [12, 3, 6, 2, 9, 11]

// let k = 3 -->   output - [2, 9, 11, 12, 3, 6] 
// step 1: reverse complete array -> [11, 9, 2, 6, 3, 12]
// step 2: revrese first k elements -> [2, 9, 11, 6, 3, 12]
// step 3: reverse rest elements except k elements -> [2, 9, 11, 12, 3, 6] == output result

function revrese(arr, left, right){
    while(left<right){
        [ arr[left], arr[right] ] = [ arr[right], arr[left] ]
        left++
        right--
    }

}
function rotate(arr,k){
    revrese(arr, 0, arr.length-1)
    revrese(arr, 0, k-1)
    revrese(arr, k, arr.length-1)
    return arr    
}
console.log(rotate([12, 3, 6, 2, 9, 11], 3 ))
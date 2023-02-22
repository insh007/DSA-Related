//Q: reverse array without using extra array 
let arr = [12, 4 , 67, 2, 34]  // output -> [34, 2, 67, 4, 12]
let left = 0
let right = arr.length-1
while(left<right){
    [ arr[left], arr[right] ]  = [ arr[right], arr[left] ]
    left++
    right--
}
console.log(arr)  // // output -> [34, 2, 67, 4, 12]

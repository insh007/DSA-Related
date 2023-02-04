//Problem Statement: Find the first pair that sum to 0

//Method 1: simple
// let arr = [-5, -3, -2, 1, 2, 3]
// function findPair(arr){
//     for(let i=0; i<arr.length; i++){
//         for(let j=i+1; j<arr.length; j++){
//             // let sum = arr[i] + arr[j]
//             if(arr[i] + arr[j] == 0){
//                 return [arr[i] , arr[j]]
//             }
            
//         }
//     }
//     return undefined
// }
// console.log(findPair(arr))

//Method 1: Two Pointers
// let arr = [-5, -3, -2, 1, 2, 3]

// let left = 0
// let right = arr.length-1
 
// function findPair(arr){
//     while(left<right){
//         if(arr[left]+arr[right] == 0){
//             return [arr[left],arr[right]]
//         }
//         else if(arr[left]+arr[right] < 0){
//             left++
//         }
//         else{
//             right--
//         }
//     }
//     return undefined
// }
// console.log(findPair(arr))



//Problem Statement: Find the first pair that sum to closet to 12

//Method 1: simple
// function closestSumPairs(arr) {
//     let closest = Infinity;
//     let closestPairs = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             let sum = arr[i] + arr[j];
//             let diff = Math.abs(12 - sum);
//             if (diff < closest) {
//                 closest = diff;
//                 closestPairs = [[ arr[i], arr[j] ]];
//             } else if (diff === closest) {
//                 closestPairs.push([arr[i], arr[j]]);
//             }
//         }
//     }
//     return closestPairs;
// }

// Method 2: Two pointer
// let arr = [1, 2, 5, 8, 9, 14]
// function closestSumPairs(arr) {
//     arr.sort((a, b) => a - b); // sort the array
//     let closest = Infinity;
//     let closestPairs = [];
//     let left = 0;
//     let right = arr.length - 1;
//     while (left < right) {
//         let sum = arr[left] + arr[right];
//         let diff = Math.abs(12 - sum);
//         if (diff < closest) {
//             closest = diff;
//             closestPairs = [[ arr[left], arr[right] ]];
//         } else if (diff === closest) {
//             closestPairs.push([arr[left], arr[right]]);
//         }
//         if (sum < 12) {
//             left++;
//         } else {
//             right--;
//         }
//     }
//     return closestPairs;
// }
// console.log(closestSumPairs(arr))







// Problem: Given an array find out the total numbe of negative elements present in an array

// Mehtod: If array is SORTED then use -> Binary Search
let arr = [-7, -5, -3, -2, -1, 2, 5, 8, 9]
// let arr = [5, 6, 4]
let left = 0
let right = arr.length - 1
let count = 0

function negative(arr) {
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        if (mid == 0) {
            if (arr[mid] < 0) {
                count = 1
                break
            }
            left = mid + 1
        }

        else if (mid == arr.length - 1) {
            if (arr[mid] < 0) {
                count = arr.length
                break
            }
            right = mid - 1
        }

        else if (arr[mid] < 0) {
            count = mid + 1
            left = mid + 1
        }

        else {
            right = mid - 1
        }
    }
    return count
}
console.log(negative(arr)) // TC -> O(logn) & SC -> O(1)


// Mehtod: If array is NOT SORTED then use -> Linear Search
// let arr= [2, -5, 5, -7, 8, -3, 9]
// let count = 0
// function negative(arr){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]<0){
//             count++
//         }
//     }
//     return count
// }
// console.log(negative(arr))  // TC -> O(n) & SC -> O(n)
// Optimized javaScript implementation
// of Bubble sort
// An optimized version of Bubble Sort
function bubbleSort(arr, n) {
    for (let i = 0; i < n - 1; i++) {   // n -> arr.length for last index we get arr.length-1 -> n-1  
        let swapped = false;  //Optimization -> TC -> O(n)
        for (let j = 0; j < n - i - 1; j++) {    // n-i- 1 -> n-1 also work , to unconsider last largest element which will found after 1st pass
            if (arr[j] > arr[j + 1]) {
                // swap arr[j] and arr[j+1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }

        // IF no two elements were
        // swapped by inner loop, then break means array is already sorted
        if (swapped == false)
            break;
    }
    return arr
}
let arr = [64, 34, 25, 12, 22, 11, 90]
let n = arr.length
console.log(bubbleSort(arr, n))
//TC-> Worst -> O(n^2), Average -> O(n^2), Best -> O(n)
// SC -> O(1)

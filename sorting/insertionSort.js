function insertionSort(arr, n){
    for(let i=1; i<n; i++){
        let temp = arr[i] // to store the element so that we compare it and element does not lost any time
        let j = i-1       // initialize to zero like i-1
        while(j>=0 && arr[j]>temp){     // arr[j] = 12, temp = 3  { temp == arr[j+1]}--->  12, 3  ---->  12 > 3
            arr[j+1] = arr[j]          //  3, 12  then shifting is happening not swapping
            j--
        }
        arr[j+1] = temp     // 3, 12 --> already sorted so we place again temp to its place
    }
    return arr
}
let arr = [10, 80, 30, 90, 40, 50, 70]
let n = arr.length
console.log(insertionSort(arr, n))

// TC -> O(n^2)
// Sc -> O(1)
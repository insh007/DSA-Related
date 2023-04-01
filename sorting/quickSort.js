// swap method
function swap(arr, i, j){
    [ arr[i], arr[j] ] = [ arr[j], arr[i] ] 
    // let temp = arr[i]
    // arr[i] = arr[j]
    // arr[j] = temp
}

//partition method
function partition(arr, low, high){
    let pivot = arr[high] // set last element as a pivot element 

    let i = low-1 //initially assume no element present less than pivot element (initally low==0 then low-1 == -1 that is out of the index of array bound)

    for(let j=low; j<=high-1; j++){
        if(arr[j] < pivot){
            i++             // Increment index of smaller element
            swap(arr, i, j)  
        }
    }
    swap(arr, i+1, high)
    return i+1
}

//quick sort method
function quickSort(arr, low, high){
    if(low < high){
        // pi is partitioning index
    let pi = partition(arr, low, high)

    quickSort(arr, low, pi-1)     // recursively call quickSort method
    quickSort(arr, pi+1, high)    // recursively call quickSort method
    }
    return arr  // inplace working algorithm
}

let arr = [10, 80, 30, 90, 40, 50, 70]
let n = arr.length
console.log(quickSort(arr, 0, n-1))  // TC: Best & Average Case -> O(n logn), Worst Case -> n^2 || SC: O(logn) 

function merge(arr, l, mid, r){
    let i = l        
    let j = mid+1
    let k = l      // k -> for result array index
    let result = []

    while(i<=mid && j<=r){
        if(arr[i] < arr[j]){
            result[k] = arr[i]
            i++
        }else{
            result[k] = arr[j]
            j++
        }
        k++
    }

    if(i>mid){  // i>mid -> i will cross mid menas left array is exhausted(no element left) 
        while(j<=r){    // j<=r -> right subarray condition 
            result[k] = arr[j]
            j++
            k++
        }
    }else{
        while(i<=mid){    // i<=mid -> left subarray condition
            result[k] = arr[i]
            i++
            k++
        }
    }

    // assigning result sorted array elements to the original array arr
    for(let k=l; k<=r; k++){
        arr[k] = result[k]
    }
}

function mergeSort(arr, l, r){
    if(l<r){     // l<r -> atleat two elements present in array then only we can calculate mid
        let mid = Math.floor((l+r)/2)

        mergeSort(arr, l, mid)   // for first subarray till mid from left
        mergeSort(arr, mid+1, r)  // for second subarray till right from mid+1
        merge(arr, l, mid, r)     // then call merge to merge divided sorted subarray
    }
    return arr  
}
let arr = [12 ,11 ,13 ,5 ,6 ,7]
let r = arr.length-1

console.log(mergeSort(arr, 0, r))

// TC -> for all cases -> O(nlogn) 
// SC -> O(n) since extra result array is used to copy original array arr elements


//================= in this code variable naming some related :
function merge(arr, left, mid, right){
    let left_new = left
    let mid_increment = mid+1
    let k = left
    let result = []

    while(left_new<=mid && mid_increment<=right){
        if(arr[left_new] < arr[mid_increment]){
            result[k] = arr[left_new]
            left_new++
        }
        else{
            result[k] = arr[mid_increment]
            mid_increment++
        }
        k++
    }

    if(left_new>mid){
        while(mid_increment<=right){
            result[k] = arr[mid_increment]
            mid_increment++
            k++
        }
    }else{
        while(left_new<=mid){
            result[k] = arr[left_new]
            left_new++
            k++
        }
    }

    for(let m=left; m<=right; m++){
        arr[m] = result[m]
    }

}

function mergesort(arr, left, right){
    if(left<right){
        let mid = left + Math.floor((right-left)/2)

        mergesort(arr, left, mid)
        mergesort(arr, mid+1, right)
        merge(arr, left, mid, right)
    }

    return arr
}



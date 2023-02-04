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






let arr = [1, 3, 7, 9, 12, 17, 22, 30, 45]

let x = 17

function linearSearch(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i] == x){
            return `${x} is present at index ${i}`
        }
    }

    return `${x} is not present`
}

console.log(linearSearch(arr))

// Tc:
// worst case -> O(n)
// Best case  -> O(1)
// Average case -> O(n/2)
//SC -> O(1)
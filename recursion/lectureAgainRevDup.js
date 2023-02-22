// //Q: print the duplicate in an array

// let arr = [ 23, 3, 2, 1, 3, 1]

// let map = new Map()
// for(let i=0; i<arr.length; i++){
    // map.set(arr[i], (map.get(arr[i]) || 0) + 1) // assigning values to map as keys and values

//     // OR ->  // assigning values to map as keys and values
//     // if( map.get(arr[i]) == undefined) map.set(arr[i], 1)
//     // else map.set(arr[i], map.get(arr[i]) + 1)

//     // OR ->  // assigning values to map as keys and values
        // if (map.has(pre)) {
        //     map.set(pre, map.get(pre) + 1);
        // } else {
        //     map.set(pre, 1);
        // }
// }
// console.log(map)
// let res = []
// for(let [key,value] of map){
//     if(value > 1){
//         res.push(key)
//     }
// }
// console.log(res)  // output -> [ 3, 1 ]




// CZ
function solution(arr) {
    //Write your solution here
    let count = 0
    let map = new Map()
    for (let i = 0; i < arr.length; i++) {
        // map.set(arr[i], (map.get(arr[i]) || 0) +1)
        if (map.get(arr[i]) == undefined) map.set(arr[i], 1)
        else map.set(arr[i], map.get(arr[i]) + 1)
    }
    for (let i = 0; i < arr.length; i++) {
        if (map.get(arr[i]) == 1 && map.get(arr[i]) != " ") {
            count++
        }
    }
    console.log(arr)
    console.log(map)
    return count
}
console.log(solution([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 12, 13, 14, 21, 45, 65, 23, 34, 54, 56]))


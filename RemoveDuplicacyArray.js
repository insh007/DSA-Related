//------------- Multiple Approaches to Remove Duplicate Elements frm an Array -------------------------


// // Method : 1 (Using IndexOf() Method)
let arr =[1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,0 ,1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,0]//output->[1,2,3,4,5,6,7,8,9,0]
function removeDuplicate(arr){
    let unique = []
    for(let i=0; i<arr.length; i++){
        if(arr.indexOf(arr[i]) == i){
            unique.push(arr[i])
        }
    }
    return unique
}
// console.log(removeDuplicate(arr))  // TC -> O(n) and SC -> O(n)



// Method : 2 (Using includes() Method)
// let arr =[1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,0 ,1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,0]//output->[1,2,3,4,5,6,7,8,9,0]
// let arr=[11, 2, 11, 44, 5, 2, 2, 7, 8, 44]//output->[11, 2, 44, 5, 2, 7, 8]
function removeDuplicate(arr){
    let unique = []
    for(let i=0; i<arr.length; i++){
        if(unique.includes(arr[i]) == false){
            unique.push(arr[i])
        }
    }
    return unique
}
// console.log(removeDuplicate(arr))  // TC -> O(n) and SC -> O(n)


// Method : 3 (Using Map)
// let arr =[1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,0 ,1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,0]//output->[1,2,3,4,5,6,7,8,9,0]
// let arr=[11, 2, 11, 44, 5, 2, 2, 7, 8, 44, 11]//output->[11, 2, 44, 5, 7, 8]
function removeDuplicate(arr){
    let map = new Map()
    let unique = []
    for(let i=0; i<arr.length; i++){
        if(!map.has(arr[i])){
            map.set(arr[i], true)
            unique.push(arr[i])
        }
    }

    return unique
}
// console.log(removeDuplicate(arr))   // TC -> O(n) and SC -> O(n)



// Method : 4 (Using Set)
// let arr =[1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,0 ,1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,0]//output->[1,2,3,4,5,6,7,8,9,0]
// let arr=[11, 2, 11, 44, 5, 2, 2, 7, 8, 44, 11]//output->[11, 2, 44, 5, 7, 8]
function removeDuplicate(arr){
    let set = new Set()
    let unique = []
    for(let i=0; i<arr.length; i++){
        if(!set.has(arr[i])){
            set.add(arr[i], true)
            unique.push(arr[i])
        }
    }

    return unique
}
// console.log(removeDuplicate(arr))   // TC -> O(n) and SC -> O(n)



// Method : 5 (Using Object)
// let arr =[1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,0 ,1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,0]//output->[1,2,3,4,5,6,7,8,9,0]
// let arr=[11, 2, 11, 44, 5, 2, 2, 7, 8, 44, 11]//output->[11, 2, 44, 5, 7, 8]
function removeDuplicate(arr){
    let obj = {}
    let unique = []
    for(let i of arr){
        if(!obj[i]){
            obj[i] = true
        }
    }
    for(let [key, value] of Object.entries(obj)){
        if(value == true){
            unique.push(key)
        }
    }

    // console.log(obj)   // TC -> O(n) and SC -> O(n)
    return unique
}
// console.log(removeDuplicate(arr))   // TC -> O(n) and SC -> O(n)


// Method 6:  (Using Set InBuilt Method)
// let arr =[1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,0 ,1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,0]//output->[1,2,3,4,5,6,7,8,9,0]
// // let arr=[11, 2, 11, 44, 5, 2, 2, 7, 8, 44, 11]//output->[11, 2, 44, 5, 7, 8]
function removeDuplicate(arr){
    let unique = [...new Set(arr)]
    return unique
}
// console.log(removeDuplicate(arr))  // TC -> O(n) and SC -> O(n)

// --------------- Assigning Array into an object ---------------------
// let obj = {}
// // let arr = [12,1,19,33,22,19,1]
// // let arr = ['d', 'a', 'e', 'b', 'c']
// for(let i of arr){
//     // console.log(i)
//     obj[i] = 1
// }
// console.log(obj)  // output -> no duplicacy, elements set as keys, set in ascending order -: [12,1,19,33,22,19,1] 



//------------------------------------- Concurrency --------------------------
let obj = {}
let arr = [2,3,5,3,9,3,9,1,1,9,2,9,4,5]

// for(let i of arr){
//     if(obj[i]){
//         obj[i] = obj[i] + 1
//     }else{
//         obj[i] = 1
//     }
// }
// ---------- OR ----------
for(let i of arr){
    // if(obj[i]){
        obj[i] = (obj[i] || 0) + 1
    // }else{
    //     obj[i] = 1
    // }
}
console.log(obj)  // output -> { '1': 2, '2': 2, '3': 3, '4': 1, '5': 2, '9': 4 }


//--------------------------- 
// let obj = {}
// // let arr1 = [2,1,3,4,5]
// // let arr2 = [5,7,9,8,6]
// let arr1 = ["name", "city", "state"]
// let arr2 = ["Inshad Ali", "Bulandshahr", "U.P."]

// let j = 0
// for(let i of arr1){
//     // for( j of arr2){
//         obj[i] = arr2[j]
//     // }
//     j++      
// }
// console.log(obj)
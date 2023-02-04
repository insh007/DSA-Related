//----------- Count frequency in an array
// let arr = [1,3,2,1,1,2,3]

// let obj = {}
// for(let i of arr){
//     if(obj[i]){
//         obj[i]++
//     }else{
//         obj[i] = 1
//     }
// }
// console.log(obj)  // Time complexity -> O(n)


//--------------------- Count frequency in an array (brute force)
// let arr = [1,3,2,1,1,2,3]   // work not properly
// let visited = false
// for(let i=0; i<arr.length; i++){
//     if(visited[i]==true)continue;
//     let count = 1
//     for(let j=i+1; j<arr.length; j++){
//         if(arr[i]==arr[j]){
//             visited[j] = true
//             count++
//         }
//     }
//     console.log(arr[i] +" "+count)
// }


//problem: Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the seconds array. The frequency of values values must be the same?

// same([1,2,3], [4,1,9]) //true
// same([1,2,3], [1,9]) //false
// same([1,2,1], [4,1,9]) //false

//Method:1: Brute force
// function same(arr1,arr2){
//     if(arr1.length != arr2.length)return false
//     for(let i=0; i<arr1.length; i++){
//         let findIndex = arr2.indexOf(arr1[i] ** 2)
//         if(findIndex == -1){
//             return false
//         }
//         arr2.splice(findIndex,1)
//     }
//     return true
// }
// console.log(same([1,2,3], [4,1,9])) // Time Complexity : ??
// console.log(same([1,2,3], [1,9]))
// console.log(same([1,2,1], [4,1,9]))  

//Method:2: frequency counter 
function same(arr1,arr2){
    let obj1 = {}
    let obj2 = {}
    if(arr1.length != arr2.length)return false

    for(let i of arr1){
        if(obj1[i]){

            obj1[i] = obj1[i] + 1
        }else{
            obj1[i] = 1
        }
    }
    for(let i of arr2){
        obj2[i] = (obj2[i] || 0) + 1
    }

    for(let key of arr1){
        // if(!(key ** 2 in obj2)){
        //     return false
        // }
        
        if(obj1[key] != obj2[key ** 2]){
            return false
        }
    }
    return true
}
// console.log(same([1,2,3], [4,1,9])) //true      Time Complexity : O(n)
// console.log(same([1,2,3], [1,9])) // false
// console.log(same([1,2,1,2,2], [4,1,4,7,1])) // false
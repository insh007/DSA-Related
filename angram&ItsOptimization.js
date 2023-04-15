//Method 1: Brute Force
// function angram(str1, str2){

//     if(str1.length != str2.length) return false

//     for(let i=0; i<str1.length; i++){
//         let charFound = false
//         for(let j=0; j<str2.length; j++){
//             if(str1[i] == str2[j]){
//                 charFound = true
//                 break
//             }
//         }

//         if(!charFound) return false
//         //OR 
//         // if(!str1.includes(str2[i])){
  //         //     return false
//         // }
//     }

//     return true
// }
// console.log(angram("inshead", "hfiNsad")) // Time Complexity -> O(n^2)


//Method 2: Another approach
// function angram(str1,str2){
//     let arr1 = str1.split("")
//     let arr2 = str2.split("")
    
//     if(arr1.length != arr2.length)return false
    
//     let s1 = arr1.sort()
//     let s2 = arr2.sort()

//     for(let i=0; i<arr1.length; i++){
//         if(s1[i] != s2[i]){
//             return false
//         }
//     }
//     return true
// }
// console.log(angram("inshead", "hfiNsad")) // Time Complexity -> O(nlogn)


//Method:3 - optimization code  // Time Complexity -> O(n) 
// Method : (Using Map)
function angram(str1, str2){
    if(str1.length != str2.length)return false

    let map1 = new Map()
    let map2 = new Map()

    for(let i=0; i<str1.length; i++){
        map1.set(str1[i], (map1.get(str1[i]) || 0) +1)
        map2.set(str2[i], (map2.get(str2[i]) || 0) +1)
    }

    for (let [key, value] of map1) {
        if (!map2.has(key) || map2.get(key) !== value) {
          return false;
        }
      }
    return true
}
// console.log(angram("inshead", "ieadhns"))  // true
// console.log(angram("cinema", "iceman"))  // true
// console.log(angram("ali", "luu")) // false

/**================================================================= */

//Note: It is assumed that the characters are stored using 8 bit and there can be 256 possible characters.
// function angram(str1, str2){
//     if(str1.length != str2.length)return false

//     // let s1 = str1.split("")
//     // let s2 = str2.split("")

//     let count1 = new Array(256).fill(0)
//     let count2 = new Array(256).fill(0)

//     // for(let i=0; i<256; i++){
//     //     count1[i] = 0
//     //     count2[i] = 0
//     // }
//     // console.log(count1)

//     for(let i=0; i<str1.length; i++){
//         count1[str1[i].charCodeAt(0)]++
//         count2[str2[i].charCodeAt(0)]++
//     }
//     console.log(count1)
//     for(let i=0; i<256; i++){
//         if(count1[i] != count2[i]){
//             return false
//         }
//     }
//     return true
// }
// console.log(angram("inshead", "ieadhns"))  // true
// console.log(angram("cinema", "iceman"))  // true
// console.log(angram("ali", "luu")) // false  

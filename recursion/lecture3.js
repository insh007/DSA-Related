// Q -> Reverse String

// Method 1: 
// let str = "hello"
// // console.log(str.split("").reverse().join(""))

// // Method 2: (Using Recursion)
// function r(str){
//     if(str.length<=1) return str
//     return r(str.slice(1)) + str[0]
// }
// console.log(r(str))


// IMPORTANT
// Q -> Reverse a sentence at some condition
// s = 'they are playing a game'  ---> output = 'yeht era gniyalp a emag'
let s = 'they are playing a game'
function rev(str){
    if(str.length <=1)return str

    return rev(str.slice(1)) + str[0]
}
function sen(s){
    let words = s.split(" ")
    console.log(words)
    for(let i=0; i<words.length; i++){
        words[i] = rev(words[i])
    }
    
    return words.join(" ")
}
// console.log(sen(s))



// Q -> Palindrome string/numbers
// example -> radar, madam, refer

// function pal(str){
//     if(str.length <= 1) return true

//     if(str[0] == str.slice(-1)) return pal(str.slice(1,-1))
//     else return false
// }
// console.log(pal("madam"))



// Q: Array Flatten
// let arr = [1, 2, [3,4,5], [6,7]] 
// let arr = [[1,2],[7,8], [44,14],[20,45]]  

//Method:1 (Using Recursion)
// function flatten(arr){
//     let flat = []
//     for(let i=0; i<arr.length; i++){
//         if(Array.isArray(arr[i]) == false) flat.push(arr[i])
//         else  flat = flat.concat(flatten(arr[i]))
//     }
//     return flat
// }
// console.log(flatten(arr));

// Mthod:2 (Loop)  ----> failed approach ??
// for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr.length; j++){
//         console.log(arr[i][j]);
//     }
// }

// Q: capitalized
// let arr = ['hi', 'hello', 'hola']    // output -> ['Hi', 'Hello', 'Hola'] 

// Method :1 (using for loop)
// function cap(arr){
//     let res = []    
//     for(let i=0; i<arr.length; i++){
//         res.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
//     }
//     return res
// }
// console.log(cap(arr))

// Method :2 (using Recursion) 
function cap(arr){
    let res = []
    //base
    if(arr.length == 0) return res

    let s = arr[0].charAt(0).toUpperCase() + arr[0].slice(1)
    res.push(s)
    return res.concat(cap(arr.slice(1)))
}
console.log(cap(['inshad', 'ali', 'khan']))


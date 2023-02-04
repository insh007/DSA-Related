//--------------------------- Example : 1 -----------------------------

// simple
let arr = [23,24,55,46,78,87]
// for(let i=0; i<arr.length; i++){
//     if(arr[i]%2==0){
//         console.log(arr[i] + " yes")
//     }
//     else{

//         console.log(arr[i] + ' No')
//     }
// }

// using recursion
// function cal(arr){
//     if(arr.length == 0)return console.log("array is empty")  // base condition (important)
//     else{
//         let element = arr.pop()
//         if(element%2==0){
//             console.log(element + " yes")
//         }else{
//             console.log(element + " no")
//         }  
//         cal(arr) 
//     }
// }
// cal([23,24,55,46,78,87])


//-------------------------------Example : 2 -------------------------------------------
//  countDown : n , n-1, n-2 , n-3, ........,4 ,3 , 2, 1 

// simple
// function countDown(n){
//     for(let i=n; i>0; i--){
//         console.log(i)
//     }
// }
// countDown(7)


// Using Recursion
function countDown(n){
    if(n == 0) return  // base condition
    else{
        console.log(n)
        // n--
        // countDown(n)
        return countDown(n-1)
    }
}
// countDown(5)


//----------------------------- Example : 3 -----------------------------------------  
// return the sum of 1 to n

// simple
// function sum(n){
//     let sum = 0
//     for(let i=1; i<=n; i++){
//         sum += i
//     }
//     return sum
// }
// console.log(sum(4))


// Using Recursion
// let sum = 0
// function add(n){
//     if(n==0)return n
    
//     // performing recursion in multiple line (not recommended)
//     // sum = sum + n
//     // n--
//     // add(n)       
    
//     return n + add(n-1)  // not working have to look
// }
// console.log(add(5))



//---------------------------- Example 4 ----------------------------
// product of array (using recursion)

let ar = [3,5,2,8]
function product(ar){
    if(ar.length == 0) return 1
    
    return ar[0] * product(ar.slice(1))
}
// console.log(product(ar))


//---------------------------- Example 5 ----------------------------
// power of a number (using recursion)
// 3^4 = 3 * 3 *3 * 3

function power(n, exponent){
    if(exponent == 1) return n

    return n * power(n, exponent-1)
}
console.log(power(5,4))

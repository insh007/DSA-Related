function displayName(name){
    return `Hi ${name}`
}

function displayName(fname, lname){
    return `Hi ${fname} ${lname}`
}

console.log(displayName("Inshad"))  // Hi Inshad undefined

// Note : 
// JavaScript does not support function overloading.
// In the above code example, the second function will override the first function. This is because function declarations are hoisted in JavaScript.


// ----------------------------------------------------------------------------
// this is a technique we can use to simulate function overloading in JavaScript
function sum(num1, num2 = 0, num3 = 0){
    return num1+num2+num3
}

console.log(sum(5))  // 5
console.log(sum(5, 6))  // 11
console.log(sum(3, 4, 8))  // 15

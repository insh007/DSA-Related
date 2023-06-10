// 0+1+1+2+3+5+8+...........
// 0 -> 0th term, 1 -> 1st term, 1 -> 2nd term and so on

// Time Complexity -> O(2^n) 
// space complexity -> O(n) if we consider the function call stack size, otherwise O(1)
function fibonacci(n){
    if(n<=1) return n

    return fibonacci(n-1) + fibonacci(n-2)
}

// console.log(fibonacci(6))  // 6th term -> 8


// Optimization code -> Dynamic Programming(DP)

// Time Complexity -> O(n) 
// space complexity -> O(n)  
function fib(n){
    // let f = Array.from(n+1)  // extra data structure
    let f = []
    
    f[0] = 0   // 0th term 
    f[1] = 1    // 1st term
    
    for(let i=2; i<=n; i++){
        f[i] = f[i-1] + f[i-2]
    }
    
    // console.log(f)
    return f
    // return f[n]

}
console.log(fib(7))
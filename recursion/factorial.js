// 5! = 5 * 4 * 3 * 2 * 1
// n! = n * (n-1) * (n-2) * (n-3)............* 3 * 2 * 1


// Time complexity -> O(n)
// space complexity -> O(n) // because of call stack 
function factorial(n){
    if(n==1 || n==0) return 1

    return n * factorial(n-1)
}
console.log(factorial(0))  
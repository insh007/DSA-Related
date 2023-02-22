// Poblem: Minimum number of bracket reversals needed to make an expression balanced

// Example : 1
// Input
// }{
// Output
// 2

// Example : 2
// }}}{{{
// Output
// 4

// GFG : Medium
function minimumBalanced(str){
    // Expressions of odd lengths cannot be balanced
    if(str.length%2 != 0)return -1
    
    let stack = []
     // After this loop, stack contains unbalanced part of expression, i.e., expression of the form "}}..}{{..{"
    for(let i=0; i<str.length; i++){
        if(stack.length && str[i] == "}"){
            if(stack[stack.length-1] == "{"){
                stack.pop()
            }else{
                stack.push(str[i])
            }
        }else{
            stack.push(str[i])
        }
    }
    
    // Length of the reduced expression stackNewLength = (m+n)
    let stackNewLength = stack.length
    
    // count opening brackets at the end of stack
    let noOfOpenBracs = 0
    while(stack.length && stack[stack.length-1] == "{"){
        stack.pop()
        noOfOpenBracs++
    }
    
     // return ceil(m/2) + ceil(n/2) which is actually equal to (m+n)/2 + n%2 when m+n is even.
    return (Math.ceil(stackNewLength/2) + noOfOpenBracs%2)
}

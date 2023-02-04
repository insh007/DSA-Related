// write a program to find the Greatest Commom Divisor of two numbers

//formula -> gcd(a,b) -> gcd(b, a%b)

// Using Recursion
function gcd(a, b){
    //base
    if(b == 0) return a

    return gcd(b, a%b)
}

console.log(gcd(24, 35))
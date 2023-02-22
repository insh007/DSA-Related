// calculate a^b


// a^b -> b is even -> (a^2)^b/2 = a^b -------> 3^6 = (3^2)^6/2
// a^b -> b is odd -> a*a^b-1 = a^b  ----> 3^5 = 3 * 3^4
function power(a, b){
    let res = 1

    while(b>0){
        if((b&1) != 0){     // b&1 != 0 -> b%2 != 0 to check odd number in terms of bits
            res = res * a
        }

        a = a*a
        b = b >> 1          // b >> 1  ->  b/2 to divide a number by 2 in terms of bits
    }

    return res
}

// console.log(power(5, 3))   // TC -> O(logn) & SC -> O(1) 

//Using Recursion 

function p(n, exponent){
    //base
    if(exponent == 0)return 1
    
    //recursive
    return n * p(n, exponent-1)
}
console.log(p(2, 3)) // TC -> O(exponent) & SC -> O(exponent)
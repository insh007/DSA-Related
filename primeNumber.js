// Check whether a number is a prime or not ?
// General
// function isPrime(n){
//     // let check = true

//     if(n<2){
//         return false
//     }

//     for(let i=2; i<n; i++){
//         if(n%i == 0){
//             return false
//             // check = false
//             // break
//         }
//     }
    
//     return true
//     // if(check) return "Yes Prime"
//     // else return "Not Prime"
// }

// console.log(isPrime(44))  // TC -> O(n)   &  SC -> O(1) 

// Optimization -> above code
function isPrime(n){
    // let check = true

    if(n<2){
        return false
    }

    // i*i<=n -> there is no factor of n between 2 and that number means It is prime number
    for(let i=2; i*i<=n; i++){
        if(n%i == 0){
            return false
            // check = false
            // break
        }
    }
    
    return true
    // if(check) return "Yes Prime"
    // else return "Not Prime"
}

// console.log(isPrime(1))  // TC -> O(root of n)   &  SC -> O(1)


// Problem: calculate number of prime numbers upto n
// function calPrime(n){
//     let primes = []

//     for(let i=2; i<=n; i++){  // TC -> O(n)
//         if(isPrime(i)){       // TC -> O(root n)  //optimization
//             primes.push(i)
//         }
//     }
//     return primes
// }
// console.log(calPrime(50))  // TC -> O(n * root n)  &  SC -> O(1)

/**================================================================================== */

// Problem: calculate number of prime numbers upto n (Second Approach)
// Sieve of Eratosthenes Algorithm
function calPrimeAgain(n){
    let primes = new Array(n+1).fill(true)
    let result = []

    for(let i=2; i*i<=n; i++){
        if(primes[i] == true){
            // Update all multiples of i and then mark as false that is number is not prime
            for(let j=i*i; j<=n; j= j+i){
                primes[j] = false
            }
        }
    }
    // Print all prime numbers
    for(let i=2; i<=n; i++){
        if(primes[i] == true){
            result.push(i)
        }
    }
    return result
}
console.log(calPrimeAgain(10)) // TC -> O(n*log(log(n)))  & SC-> O(n)

// TC -> explaination 
// This is because the algorithm involves iterating over all numbers up to n, marking the composites (non-prime numbers), and for each composite marking off its multiples. The time it takes to mark off the multiples of a number i is proportional to n/i, and the sum of the reciprocals of all primes less than n is log log n, so the total time complexity is O(n log log n).


// The time complexity of the provided code is O(nlog(logn)), which is commonly known as the time complexity of the Sieve of Eratosthenes algorithm.

// The outer loop of the algorithm runs from 2 to the square root of n. Since we only need to check the primes up to the square root of n to find all the primes up to n, the outer loop runs sqrt(n) times.

// Inside the outer loop, we have an inner loop that runs from i*i to n, with a step of i. This loop marks all the multiples of the current prime number as composite. Since each composite number is only marked once, the inner loop runs approximately n/i times.

// Therefore, the total number of times the inner loop is executed is:

// n/2 + n/3 + n/5 + n/7 + ... + n/p
// where p is the largest prime number less than or equal to the square root of n. This sum is known as the harmonic series, and it is approximately equal to log(logn).

// Thus, the overall time complexity of the algorithm is O(nlog(logn)).
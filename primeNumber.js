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
console.log(calPrimeAgain(30)) // TC -> O(n*log(log(n)))  & SC-> O(n)

// TC -> explaination 
// This is because the algorithm involves iterating over all numbers up to n, marking the composites (non-prime numbers), and for each composite marking off its multiples. The time it takes to mark off the multiples of a number i is proportional to n/i, and the sum of the reciprocals of all primes less than n is log log n, so the total time complexity is O(n log log n).
//Problem: Find if angram of a stirng is pallindrome or not


// Note: Two strings will be angram if they consists same number of characters frequency but the arrangement of characters can be different.

let str1 = "cinema"
let str2 = "iceman"

let res = ''
for(let i=str1.length-1; i>=0; i--){
    res = res + str1[i]
}
// console.log(res)   // amenic

if(res === str2)console.log("Yes Pallindrome")
else console.log("No Pallindrome")
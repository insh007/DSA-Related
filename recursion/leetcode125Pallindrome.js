// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.


//Mehtod : 

var isPalindrome = function (s) {
    let newstr = ""
    for (let i = 0; i < s.length; i++) {
        let c = s[i].toLowerCase()
        // if (isAlphaNumeric(c)) {
        //     newstr += c
        // }
        // OR
        if ((c >= "a" && c <= "z") || (c >= "0" && c <= "9")) {
            newstr += c;
        }
    }
    if (newstr == reverse(newstr)) return true
    else return false
};

// reverse using recursion
// function reverse(str){
//     //base condition
//     if(str.length<=1)return str

//     //recursive condition
//     return reverse(str.slice(1)) + str[0]
// }

// reverse using loop
function reverse(str) {
    let revstr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        revstr += str[i]
    }
    return revstr
}
function isAlphaNumeric(ch) {
    let regex = /^[a-z0-9]+$/gi
    return regex.test(ch)
}




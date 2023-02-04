/*--------------------------Maximum Number of Vowels in a Substring of Given Length--------------------- */
// Leetcode -> 1456
// Example 1:

// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.

function isVowel(ch){
    if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u'){
        return true
    }
    return false
}
var maxVowels = function(s, k) {
   let count = 0
   let maxVowels = 0
   for(let i=0; i<k; i++){
       if(isVowel(s[i])){
           count++
       }
   }
   maxVowels = Math.max(maxVowels, count)
   for(let i=k; i<s.length; i++){
       if(isVowel(s[i])){
           count++
       }
       if(isVowel(s[i-k])){
           count--
       }
       maxVowels = Math.max(maxVowels, count)
   }
   return maxVowels
};
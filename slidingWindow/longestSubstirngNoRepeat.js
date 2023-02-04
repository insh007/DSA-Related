//-------------------- Longest Substring Without Repeating Characters (variable sliding window) -----------
// Leetcode problem - 3

var lengthOfLongestSubstring = function(s) {
    let freqency = {} //if present then 1 otherwise 0, 1 represent duplicacy then we delete that character as 0
    let start = 0
    let maxLength = 0
    for(let end=0; end<s.length; end++){
        while(freqency[s[end]] == 1){   // already present
            freqency[s[start]] = 0  // delete by assigning to 0
            start++
        }
        freqency[s[end]] = 1   // if not present then put in frequency object as 1 means now it is present in object
        maxLength = Math.max(maxLength, end-start+1)  //end-start+1 -> charactres size between end and start
    }
    return maxLength
};
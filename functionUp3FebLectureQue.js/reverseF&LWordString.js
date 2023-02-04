//Problem: In a given stirng reverse the first and last word of that string
let st = 'Google is my dream company' // output -> 'company is my dream Google'
let ar = st.split(" ")
// let lastWord = ar[ar.length-1]
// let firstWord = ar[0]
// ar[ar.length-1] = firstWord
// ar[0] = lastWord
// console.log(ar.join(" "))

//OR----Swap
// let temp = ar[0]
// ar[0] = ar[ar.length-1]
// ar[ar.length-1] = temp
console.log(ar.join(" "))   // TC -> O(n) & SC -> O(n)



//Problem: In a given stirng reverse the first and last word characters of that string

let str = 'Google is my dream company'  // output -> 'elgooG is my dream yanpmoc'

let arr = str.split(" ")
// console.log(arr.join(" "))

let first = arr.shift()
let last = arr.pop()

let w1 = ""
let w2 = ""
for(let i=first.length-1; i>=0; i--){
    w1 = w1 + first[i]
}
for(let i=last.length-1; i>=0; i--){
    w2 = w2 + last[i]
}

arr.unshift(w1)
arr.push(w2)

let s = arr.join(" ")
// console.log(s)   // TC -> O(n) & SC -> O(n)



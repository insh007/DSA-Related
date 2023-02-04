//Problem: convert an array of numbers to array of string in such a way that if numbers was 1,2,3,4 then strings would have values like like in 1:a  in 2:b  in 3: abc  e.g., [2,5] => ["ab", "abcde"]

//-------------------
let arr = [1,2,3,4,5]
let str = ""
for(let i=0; i<arr.length; i++){
    for(let j=0; j<=arr[i]; j++){
        str = str + String.fromCharCode(j+96)
    }
    arr[i] = str
    str = ""
}
// console.log(arr[0])
// console.log(arr) // [ '`a', '`ab', '`abc', '`abcd', '`abcde' ] ---> extra `



//-----------------Method : 1
let ar = [1,2,3,4,5]
let s  =  'abcdefghijklmnopqrstuvwxyz'
let res = []

for(let i=0; i<ar.length; i++){
    res.push(s.slice(0, ar[i]))
}
console.log(res)  // [ 'a', 'ab', 'abc', 'abcd', 'abcde' ]
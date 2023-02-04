//------------------------- Reverse stirng Multiple approach ---------------------

// let str = 'hello'  // output -> olleh     // inshad -> dahsni

// Method : 1 (Revrese Loop)
let res = ""
for(let i=str.length-1; i>=0; i--){
    res = res + str[i]
}
console.log(res)   // TC -> O(n)  and SC(1)


// Method : 2 (Recursion)
function reverse(str){
    //base condition
    if(str.length<=1)return str

    //recursive conditon
    return reverse(str.slice(1)) + str[0]
}
console.log(reverse("inshad"))  // TC -> O(n)  and SC(n)


// Method : 3 (Two Pointers)
let str = 'hello'
function rev(s) {
    let str = s.split("")
    let left = 0
    let right = str.length - 1
    while (left < right) {
        let temp = str[left]
        str[left] = str[right]
        str[right] = temp
        left++
        right--
    }
    return str.join("")
}
console.log(rev(str))  // TC -> O(n)  and SC(n) (using extra array to store n no of elements)


// Method: 4  (In Place reverse -> Bole to extra space use nhi krne ka or space O(1) khane ka)
let s = 'hello'
function phirseReverseKarega(str){
    let left = 0
    let right = str.length-1
    while(left<right){
        let temp = str[left]
        str = str.slice(0,left) + str[right] + str.slice(left+1)
        str = str.slice(0,right) + temp + str.slice(right+1)
        left++
        right--
    }
    return str
}
console.log(phirseReverseKarega(s)) // TC -> O(n)  and SC(1) 

// Method : 5  (using In Built method)
// let str = 'hello'
console.log(str.split('').reverse().join(""))  //TC-> O(n)and SC(n) (using extra array to store n no of elements)
let fn = function(s){
    let arr = s.split("")
    let res = []
    for(let i=0; i<arr.length; i++){
        if(arr.indexOf(arr[i] == i)){
            res.push(arr[i])
        }
    }
    return res.join("")
}
console.log(fn("Hello World"))
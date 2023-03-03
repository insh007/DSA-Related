let arr = ['X', 'XXL', 'X', 'M', 'M','S', 'P']
let unique = []
for(let i=0; i<arr.length; i++){
    if(arr.indexOf(arr[i])==i){
        unique.push(arr[i])
    }
}
console.log(unique)  // [ 'X', 'XXL', 'M', 'S', 'P' ]

//--------------------------------OR----------------------------
let ar = ['X', 'XXL', 'X', 'M', 'M','S', 'P']
let uniques = []
for(let i=0; i<ar.length; i++){
    if(uniques.includes(ar[i])==0){
        uniques.push(ar[i])
    }
}
console.log(uniques)  // [ 'X', 'XXL', 'M', 'S', 'P' ]
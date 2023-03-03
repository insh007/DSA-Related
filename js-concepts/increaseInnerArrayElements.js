// Method -1
const arr = [ [14,21,23,64], [33,46,51,65]]
// const result = []
// function increaseByOne(){
//     for(let i=0; i<arr.length; i++){
//         result[i] = []
//         for(let j=0; j<arr[i].length; j++){
//             const newValue = arr[i][j] + 1
//             result[i].push(newValue)
//             // result.push(newValue)
//         }
//     }
//     return result
// }
// console.log(increaseByOne())

//Method-2
const res = arr.map(outerArray => outerArray.map(value => value+1) )
console.log(res)
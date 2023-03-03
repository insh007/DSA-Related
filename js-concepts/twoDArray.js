//----------------- 1 ----------------------
let arr = [[1,2],[7,8], [44,14],[20,45]]
// console.log(arr.flat())    //[1,  2,  7,  8, 44, 14, 20, 45] (output)

let ar = arr.flat()
for(let i=0; i<ar.length; i++){
    // console.log(ar[i])    // 1,  2,  7,  8, 44, 14, 20, 45  (output)
}

//--------------------------------------------------
for(let i=0; i<arr.length; i++){   //outer loop runs 4 times
    // for(let j=0; j<arr.length; j++){
        // console.log(arr[i][0] ,arr[i][1])    // 1,  2,  7,  8, 44, 14, 20, 45  (output) // 2 extra undefined in 
        
        // console.log(8) // inner loop runs 16 times
    // }
    // console.log("outer") 
}

//-------------------------- 2 ----------------------------

// for(let i of arr){
//     for(let j of i){
//         // console.log(j)    // // 1,  2,  7,  8, 44, 14, 20, 45  (output)
//     }
// }

//--------------------- 3 -----------------------
for(let i=0; i<arr.length; i++){   
    for(let j=0; j<arr.length-2; j++){
        console.log(arr[i][j])    // 1,  2,  7,  8, 44, 14, 20, 45  (output)
    }
}

//---------------------- 4 -------------------------
// for(let i=0; i<arr.length; i++){   
//     for(let j=0; j<arr[i].length; j++){
//         console.log(arr[i][j])    // 1,  2,  7,  8, 44, 14, 20, 45  (output)
//     }
// }

//------------------- 5 ------------
// arr.map(outerArray => outerArray.map(value => console.log(value)))

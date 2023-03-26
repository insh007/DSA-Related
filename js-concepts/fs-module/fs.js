const fs = require('fs')

// fs.readFile('F:/Android Topics.txt', 'utf-8', (err, data) => {
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data)
//     }
// })


// fs.writeFile('F:/Android Topics.txt',"This is going to be written by fs module & replacing file existing data",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("data written successfully")
//     }
// })



//==============================================================

fs.writeFile('F:/myfile.txt', "add by fs module here, cool", (err) => {
    if(err){
        console.log(err)
    }
    else{
        console.log("file created and data written succesfully")
    }
})



fs.readFile('F:/myfile.txt', 'utf-8', (err,data) => {
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})


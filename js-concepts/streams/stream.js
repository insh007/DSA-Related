const fs = require('node:fs')

const readableStream = fs.createReadStream('./file1.txt', {
    encoding : 'utf-8',
    // highWaterMark: 2    // this will print only two characters at a time 
})

const writeableStream = fs.createWriteStream('./file2.txt')

// readableStream.on("data", (chunk) => {
//     console.log(chunk)
//     writeableStream.write(chunk)
// })

// OR

// pipe : 1. It takes readable stream and connects to it writeable stream
//        2. It allowing data to flow from one stream to anothero            
readableStream.pipe(writeableStream)
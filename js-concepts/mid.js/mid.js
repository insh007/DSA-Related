const express = require('express')
const app = express()

app.use('/test', function(req,res){
    res.send('test is done')
})

app.listen(3000, function(){
    console.log("Express app is running on PORT",3000)
})
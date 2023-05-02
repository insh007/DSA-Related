// Note: Error-first callback is a widely-used convention in Node.js for handling errors in asynchronous functions. In an error-first callback, the first argument passed to a callback function is always an error object, which is null if no error occurred, and an object with an error message if an error occurred.

function divide(num1, num2, callBack){
    if(num2 == 0){
      const error = new Error("can not divide by zero")
      callBack(error)
    }
    else{
      const result = num1/num2
      callBack(null, result)
    }
  }
  
  
  divide(10, 0, (err, data) => {
    if(err){
      console.error(err)
    }
    else{
      console.log(data)
    }
  })
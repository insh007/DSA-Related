// console.log(2+25+"6")  //output -> 2+7 = 27  27 will concatenate with 6 == 276
// console.log(2+25+ +"6")  //output -> 2+7 = 27  27  and +"6" is a number because + is a unary operator that convert string "6 to number"

// console.log(typeof("6"))  // string
// console.log(typeof(+"6"))  // number        hence proved

// console.log(+"6")  // unary operator converts string "6" into number 6
// console.log(+5)  // output -> 5 (number)
// console.log(+-1)  // output -> -1 (number)

// console.log(+'')  // output -> 0  empty stirng convert into number by unary operator
// console.log(+true)  // output -> 1  
// console.log(+false)  // output -> 0  
// console.log(+"false")  // output -> NaN

// console.log(typeof(undefined))   // undefinded
// console.log(typeof(null))   // object
// console.log(typeof([]))   // object
// console.log(typeof(NaN))   // number

// console.log(+NaN)  // Nan
// console.log(+undefined)  // Nan

//----------------- MORE CONFUSING -----------------------
// function fun(){
//     console.log("hh")
// }
// console.log(typeof(fun)) // output -> function

// function fun(){
//     console.log("hh")
// }
// console.log(typeof(fun())) // output -> hh and undefined



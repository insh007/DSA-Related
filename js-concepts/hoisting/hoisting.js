/*--------- var scenario -----------*/
//--------------------
x = 5
var x
// console.log(x)  // output -> 5

//-----------------
// console.log(y)  // output -> undefined
var y

//--------------
// console.log(xx) // ReferenceError: xx is not defined

//--------------
// console.log(xy)  // output -> undefined
var xy = 99
// console.log(xy)  // output -> 99

//---------------------------------
// console.log(x)  // output ->  undefined due to Hoisting 
// {
//     var x = 99
// }
// console.log(x)  // output -> 99 var has Global Scope

/*--------- let scenario ( same for const ) -----------*/
//-------------------
// l = 88
// let l
// console.log(l)  // ReferenceError: Cannot access 'l' before initialization

//--------------
// console.log(ll)     // ReferenceError: Cannot access 'll' before initialization
// let ll

//--------------
// console.log(tt)  // ReferenceError: Cannot access 'tt' before initialization
// let tt = 9

// d = 88
// const d  // syntax error


//----------- function scenario
// h()  // output -> Hii
// function h(){
//     console.log("Hii")
// }
// h() // output -> Hii
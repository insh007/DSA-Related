// if (Math.random() > 0.5) {
//     const x = 1;
//   } else {
//     const x = 2;
//   }
//   console.log(x); // ReferenceError: x is not defined due to block scope

// if (Math.random() > 0.5) {
//     let x = 1;
//   } else {
//     let x = 2;
//   }
//   console.log(x); // ReferenceError: x is not defined due to block scope

// if (Math.random() > 0.5) {
//     var x = 1;
// } else {
//     var x = 2;
// }
// console.log(x); // output -> random output generate between 0 and 1 due to Math.random() so both if and else block execute


//--------------------Closure scope chain --------------
// global scope
// const e = 10;
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       // outer functions scope
//       return function (d) {
//         // local scope
//         return a + b + c + d + e;
//       };
//     };
//   };
// }

// console.log(sum(1)(2)(3)(4)); // 20
//---- OR --
// const sum2 = sum(1);
// const sum3 = sum2(2);
// const sum4 = sum3(3);
// const result = sum4(4);
// console.log(result); // 2

//--------------------------
// function outer() {
//     const x = 5;
//     if (Math.random() > 0.5) {
//       const y = 6;
//       return () => console.log(x, y);
//     }
//   }
  
//   outer()(); // Logs 5 6  or error

//----------------------
// const x = 55
// if(true){
//     var x = 77
// }
// console.log(x) // output -> 77

//---------------
// if(true){
//     const x = 77
// }
// console.log(x) // Refrence error : x is not defined (in case of let also)

//--------------
// const x = 66
// function s(){
//     console.log(x) // from global scope we can access the variable inside functional(local) scope
// }
// s()

//-----------------------
// console.log(x)
// function s(){
//     var x = 99 // from global scope we can access the variable inside functional(local) scope
// }
// s()

//---------------------------------
// console.log(x)  // output ->  undefined due to Hoisting 
// {
//     var x = 99
// }
// console.log(x)  // output -> 99 var has Global Scope

//-----------------------
// console.log(x)  // ReferenceError: x is not defined 
const y = 100
{
    // console.log(x)  // ReferenceError: Cannot access 'x' before initialization
    const x = 99
    console.log(x) // output -> 99
}
// console.log(x)  // ReferenceError: x is not defined
console.log(y)  // output - > 100
// normal function
// function fn(a,b){
//     return (  a + " " +  b)
// }
// console.log(fn(2,3))


// closure
// function outerfn(a,b){
//     return function innerfn(){
//         // return (a + " " + b)
//            return console.log(a + " " +  b)
//     }
// }
// const result = outerfn(10,7)
// // console.log(result())
// result()

// ----------- OR ----------
// function outerfn(a,b){
//     function innerfn(){
//        console.log(a + " " +  b)
       
//     }
//     innerfn() 
// }
// outerfn(5,10)

// --------------------- closure simple example -----------------
// function outer(){
//     const name = "Inshad"
//     function inner(){
//         console.log(name)
//     }
//     inner()
// }
// outer()

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

//--------------------Closure scope chain or currrying simple one --------------
function outermost(){
    const fname = "Inshad"
    return function(){
        const lname = "Ali" 
        return function(){
            const cr = "insh007"
            return function(){
                return `${fname} ${lname} ${cr}`
            }
        }
    }
}
console.log(outermost()()()())  // chaining invoked or called
// // --------- OR
// const a = outermost()
// const b = a()
// const c = b()
// const result = c()
// console.log(result)  // called after resolve chaining
// DR17R04-QQAQPWA-5L2ZNQ9-AA8ZB9G
// 44C4-CCA7-89F6-E02A-D833
// ============================ Again ===================

/*--------------------------------------------------------------------------- */
// pass by refrence in array
//-----------------
// const a = [11,10]
// const b = a

// b.push(55)
// b[0] = 100  // It wil also reflect to both a and b array
// console.log(b)    // [ 11, 10, 55 ]
// console.log(a)   // [ 11, 10, 55 ]
// beacuse of address both a and b point to same array which store at some address in memory

//---------------- 
// const a = [11,10]

// function ref(arr){
//     arr.push(55)
//     arr[0] = 100  // It wil also reflect to both a and b array
// }
// ref(a)
// console.log(a)



// pass by refrence in OBJECT
// -------------------------
let obj1 = {
    name : "Inshad",
    city : "Bulandshahr",
    work : "functionUp"
}

let obj2 = obj1
obj2.name = "Rohan"

console.log(obj1)  // change will reflect due to address

//---------------------------
// let obj1 = {
//     name : "Inshad",
//     city : "Bulandshahr",
//     work : "functionUp"
// }

// function ref(object){
//     object.name = "Rocky"
// }
// ref(obj1)
// console.log(obj1);



// Pass by VALUE
//--------------------------------
let x = 10 
let y = x
y = 100
console.log(x) // 10 -> no change because actual value is passed instead of address
console.log(y) //

//--------------------------------
let value = 120
function val(v){
    v = 150
    // console.log(v)  // 150
}
val(value)
// console.log(value); // 120 -> no change

/*--------------------------------------------------------------------------- */





//  =================================== First time =========================================

// // passing by value
// // const a =2
// // const b = a
// // console.log(a)
// // console.log(b)



// // passing by refrence or address
// const a = [1,2]
// const b = a
// // // console.log(a)     //[ 1, 2, 5 ] address
// // // console.log(b)     //[ 1, 2, 5 ] 

// b.push(5)
// console.log(a)   // [ 1, 2, 5 ]
// console.log(b)   // [ 1, 2, 5 ]


// // console.log( 2 === 2)  // true
// // console.log( "Hi" === "Hi")  // true
// // console.log( [1,2] === [] )  //  false -------> address different 
// // console.log( [1,2] === [5,2] )  // false  -------> address different
// // console.log("Result -->", [1,2] === [1,2] )  //false  -------> address different
// // console.log("Result -->", [] === [] )  //false  -------> address different
// // console.log("Result -->", [] == ![] )  //true  -------> address different

// // if([] == ![]){
// //     console.log(![])
// // }else{
// //     console.log([])
// // }

// let v = false
// // console.log(!v) // This will print true because it convert false to true here
// if(!v){
//     console.log("! denotes false so answer is:",false);
// }else{
//     console.log(true);

// }

// const ar1 = [1,2]
// const ar2 = [1,2]
// // console.log(ar1 === ar2) //false  -------> address different


// const ar11 = ar1
// // console.log(ar1 === ar11)  // true ---------> same address
// // console.log(ar1 === ar1)   // true ---------> same address
// // console.log(ar11 === ar2)   // false ---------> same address


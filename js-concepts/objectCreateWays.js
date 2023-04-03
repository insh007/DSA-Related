//-------------------  1 (Object Literal) -------------------
// let obj = {
//     name : "inshad",
//     age : 22
// }
// console.log(obj)
// console.log(obj.__proto__)  // null prototype -> {}

// ---------------------  2 (create method) ---------------
// let obj = {
//     name : "inshad",
//     age : 22
// }
// // It set the passing object as __proto__ which passes as a paramereter in argument which means new creating
// // will inherits the property of parent object (pass in argument)
// const myObj = Object.create(obj) 
// console.log(myObj.__proto__)  // { name: 'inshad', age: 22 }
// console.log(myObj)  // {}
// console.log(myObj.age)  // 22
// console.log(myObj.name)  // inshad

// ------------------------ 3 (Function Constructor) ------------------------
// function person(name , age){
//     this.name = name, 
//     this.age = age
// }
// const myObj = new person('Ali', 23)
// // myObj.city = "Delhi"
// console.log(myObj) 

// ---------------------- 4 (ES6 class syntax) ---------------------
class person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}
const myObj = new person("Mohan Das", 45)
console.log(myObj)

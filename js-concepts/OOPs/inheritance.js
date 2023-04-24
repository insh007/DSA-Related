// ---------------------  1 (ES6 class syntax) ---------------
class Parent {
    constructor(firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
    }
}

class Child extends Parent {
    constructor(firstname, lastname, age) {
        super(firstname, lastname)
        this.age = age
    }
}

const p = new Parent("Kaka", "Mami")
console.log(p)

const obj = new Child("Inshad", "Ali", 22)

console.log(obj)


  // ---------------------  2 (create method) ---------------
// let obj = {
//     name : "inshad",
//     age : 22
// }
// // It set the passing object as __proto__ which passes as a paramereter in argument which means new creating
// // will inherits (Inheritance performing) the property of parent object (pass in argument)
// const myObj = Object.create(obj)
// console.log(myObj.__proto__)  // { name: 'inshad', age: 22 }
// console.log(myObj)  // {}
// console.log(myObj.age)  // 22
// console.log(myObj.name)  // inshad


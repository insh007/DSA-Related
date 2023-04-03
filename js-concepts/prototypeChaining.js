const person = {
    name : "Mohan Das",
    age : 22
}

const father = Object.create(person)

father.childs = 3
console.log(father.__proto__)

const employee = Object.create(father)

console.log(employee.__proto__)
console.log(employee.childs)
console.log(employee.name)
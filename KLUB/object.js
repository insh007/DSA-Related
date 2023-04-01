let obj = {
    name: "kanika",
    age: 25,
    subject: "computers",
    friends: [
        {
            name: "x",
            age: 44,
            subject: "math",
        },
        {
            name: "y",
            age: 50,
            subject: "math",
        }
    ]
}

// Make zero to the age property value and also handle the edge cases if the object is empty or friends age is null or zero.
// done
// console.log(obj);
// obj.age = 0
// obj.friends[0].age = 0
// obj.friends[1].age = 0
// console.log(obj);

//------------ handle ---------------------

if(Object.keys(obj).length == 0) return console.log("object is empty")
if(!(obj.friends[0].age)) return console.log("firends with name x age is 0 or null")
if(!(obj.friends[1].age)) return console.log("firends with name y age is 0 or null")
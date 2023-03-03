// The function* declaration (function keyword followed by an asterisk) defines a generator function, which returns a Generator object.

// function* numbersGen(){
//     let i =0;
//     yield 1;
//     yield 2;
//     yield 3;
// }
// const gen = numbersGen();
// console.log(gen.next())      // { value: 1, done: false }
// console.log(gen.next())      // { value: 2, done: false }
// console.log(gen.next())      // { value: 3, done: false }
// console.log(gen.next())     //{ value: undefined, done: true }

// console.log(gen.next().value)   // 1
// console.log(gen.next().value)   // 2
// console.log(gen.next().value)   // 3


function* numbersGen(){
    let i =1;
    while(true){
        yield i++;
    }
}
const gen = numbersGen();
console.log(gen.next().value)   // 1
console.log(gen.next().value)   // 2
console.log(gen.next().value)   // 3
console.log(gen.next().value)   // 4
console.log(gen.next().value)   // 5  and so on....
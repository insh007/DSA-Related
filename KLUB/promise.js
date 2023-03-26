// ----------------------------- Guess the output---------------------------------
// console.log(1);
// setTimeout(() => console.log(2), 0)
// new Promise((res, rej) => res(console.log(3)))   //  case : 1,  as a normal console
// console.log(4)

/*
1
3    // here it behaves as a normal console so it directly goes to the stack and then execute 
4   
2
*/
//-----------------------------

// console.log(1);
// setTimeout(() => console.log(2), 0)
// new Promise((res, rej) => res(3))   //  case : 2, result should be access in then    
// console.log(4)

/*
1
4
2
*/

//----------------------------------

// console.log(1);
// setTimeout(() => console.log(2), 0)
// new Promise((res, rej) => res(3)).then((result)=>console.log(result))   //  case : 3
// console.log(4)

/*
1
4
3    // now it is coming from Microtask queue to stack then execute
2
*/


console.log(1);
setTimeout(() => console.log(2), 0)
new Promise((res, rej) => res(console.log(3))).then((result)=>console.log(result))   //  case : 4
console.log(4)

/*
1
3     // here it behaves as a normal console so it directly goes to the stack and then execute 
4
undefined   // now in .then nothing is coming from resolve so js put undefined there
2
*/
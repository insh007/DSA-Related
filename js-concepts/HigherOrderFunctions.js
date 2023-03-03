//difference between map and forEach

let arr = [4, ,5,4, ,9]
// arr.map((val)=>console.log(val))  // output -> 4,5,4,9
// let res =arr.map((val)=>val)  // output -> [ 4, <1 empty item>, 5, 4, <1 empty item>, 9 ]
// console.log(res);


// arr.forEach((val)=>console.log(val)) // output -> 4,5,4,9
let r = arr.forEach((val)=>val) // This will always returns undefined
// console.log(r);


// QUIZ

let shoppingCart = [
  {
    product: 'phone',
    qty: 1,
    price: 500,
  },
  {
    product: 'Screen Protector',
    qty: 1,
    price: 10,
  },
  {
    product: 'Memory Card',
    qty: 2,
    price: 20,
  },
];

let total = shoppingCart.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue.qty * currentValue.price;
}, 0);

console.log(total)


// const arr = [1, 2, 3, 4];
// arr.forEach(num => console.log(num * 2));

// console.log(arr)


// const arr = ['a', 'B', 'c', 'D'];
// const upperCaseArr = arr.map(char => char.toUpperCase());
// console.log(upperCaseArr);


// const arr5= [1, 2, 3, 4];
// const filteredArr = arr5.filter(num => num % 2 === 0); //[2,4]
// const hello = filteredArr.reduce((acc, num) => acc + num, 0);
// console.log(hello);


const ar = ['apple', 'banana', 'cherry', 'date'];
const filteredArr = ar.filter(str => str.includes('a')); //['apple', 'banana', 'date']
const reversedArr = filteredArr.map(str => str.split('').reverse().join(''));
console.log(reversedArr);

// 

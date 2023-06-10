// calculate average rating where rating grater than 0
let items = [
    { id: 123, name: 'name1', rating: 8, },
    { id: 1234, name: 'XYz', rating: 0 },
    { id: 125, name: 'XYz', rating: 4 }
]

// using loop
let sum = 0
let count = 0
for (let i = 0; i < items.length; i++) {
    if (items[i].rating > 0) {
        sum += items[i].rating
        count++
    }
}
let average = sum / count

// console.log(average)

// using reduce
let res =  items.reduce((acc, curr) => {
    // let sum = 0   // wrong
    // let count = 0  // wrong
    if(curr.rating > 0){
        acc.sum += curr.rating
        acc.count += 1
    }

    // return sum/count 
    return acc
}, {sum : 0, count : 0})
console.log(res)  // { sum: 12, count: 2 }
console.log(res.sum / res.count)
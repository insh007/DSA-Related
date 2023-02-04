//Problem: There is an array of animals. The animals can be repeated. Give me the data that how many times each animal is repeated

let animals = ["lion", 'giraffe', 'lion', 'kangaroo', 'giraffe', 'tiger', 'lion', 'cat', 'cat']

let map = new Map()

let count = 0
for(let i=0; i<animals.length; i++){
    // if(map.has(animals[i])){
        // count =  map.get(animals[i])
        // count++
        // map.set(animals[i], count)
    // }
    // map.set(animals[i], 1)
    map.set(animals[i], (map.get(animals[i]) || 0) +1)
}
let res = []
for(let [key, value] of map){
    if(value > 1){
        count +=  map.get(key)
        res.push(key,value)
    }
}
console.log(count)
console.log(res)

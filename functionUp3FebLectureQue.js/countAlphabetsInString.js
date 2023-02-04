// Problem: count the numbe of repeated alphabets in a given string

let str = 'anndlllj'  // output : 5

let map = new Map()
let count = 0
for(let i=0; i<str.length; i++){
    map.set(str[i], (map.get(str[i]) || 0) +1)
}

for(let [key, value] of map){
    if(value>1){
        count = count + value
    }
}

console.log(count)
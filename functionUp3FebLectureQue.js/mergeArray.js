let arr1 = [
    { name: "a", value: 123},
    { name: "b", value: 666}
]
let arr2 = [
    { name: "c", value: 444},
    { name: "d", value: 999},
    { name: "b", value: 111}
]
//output:
let result = [
    { name: "a", value: 123},
    { name: "b", value: 111},
    { name: "c", value: 444},
    { name: "d", value: 999}
]

let map1 = new Map()

let res = []
for(let i=0; i<arr1.length; i++){
    let alphabet = arr1[i].name
    if(map1.has(alphabet)){
        let digit = arr1[i].value
        if(map1.get(alphabet) < digit){
            map1.set(alphabet, digit)
            
        }
    }
    map1.set(alphabet, arr1[i].value)
}

for(let i=0; i<arr2.length; i++){
    let alphabet = arr2[i].name
    if(map1.has(alphabet)){
        let digit = arr2[i].value
        if(map1.get(alphabet) < digit){
            map1.set(alphabet, digit)
        }
    }
    map1.set(alphabet, arr2[i].value)
}

for(let [key, value] of map1){
    res.push({name:key, value:value})
}
console.log(res)
// Get the resulting output from arr1 and arr2
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

/* ------------- Solution ---------------- */
let merge = [...arr1, ...arr2]
let map  = new Map()
for(let i=0; i<merge.length; i++){
    let ch = merge[i].name

    if(map.has(ch)){
        let val = merge[i].value
        if(map.get(ch) > val){
            map.set(ch, val)
        }
    }

    map.set(ch, merge[i].value)
}

let res = []
for(let [key, value] of map){
    res.push({name: key, value: value})
}
console.log(res)
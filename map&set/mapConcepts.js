const map = new Map() 

const key1 = 'abbcccsdd'

// setting map values
map.set(key1, "this is another way to set key in map")
map.set(99, "This is a string")
map.set({}, "This is a blank object")
map.set(true, "balle balle")
map.set("inshad")
map.set(function(){}, 100)

// map.delete("abbcccsdd")
// console.log(map)  // printing whole map
// console.log(map.has(90))  // true //it checks for key
// console.log(map.get(99))  // "This is a string"
// console.log(map.get(map.has(99)))  // true
// console.log(typeof map)


// getting map values
// let val1 = map.get(55)
// console.log(val1)

// size of map
// console.log(map.size)

// we can loop using for...of loop to get keys and values
for(let [key, value] of map){
    // console.log(key, value)
}

// for only keys
for(let keys of map.keys()){
    // console.log(keys)
}

// for only values
for(let values of map.values()){
    // console.log(values)
}


// we can also use forEach()
// Note: in forEach first we have to take value and then key as parameters in argumnet
map.forEach((value, key)=>{
    // console.log("key", key)
    // console.log("value", value)
})


// Converting map to Array
const arr = Array.from(map)
// console.log("map to array is ",arr)

// only keys
// const arr = Array.from(map.keys())
// console.log("map to array is ",arr)

// only values
// const arr = Array.from(map.values())
// console.log("map to array is ",arr)



//-----------
let obj = {}
// obj.name = "inshad"
// obj.bool = true
// obj['kal'] = false
// obj[{}] = 'some'
// obj[true] = "kuch"
// obj[function(){}] = "function"
// obj['ptanhi'] = 5
// obj["num"] = 100
// obj.class  // when we declare a key but not assign any value to the key then it will not goes(store) to the object
console.log(obj)
// Program to find or calculate length of largest word in string

// let str = "I love Coding"      // coding , 6
let str = "I am learning dsa and coding"
// let str = "I"
function finder(str){
    let word = ""
    let count = 0     // to calculate word length
    let actualWord =""

    for(let i=0; i<str.length; i++){
        if(str[i] != " "){
            word += str[i]
        }
        // console.log(word)
        if(str[i] == " " || i==str.length-1){
            if(word.length > count){
                count = word.length
                actualWord = word
            }
            word = ""
        }
    }
    return (`${actualWord}, ${count}`)
}
console.log(finder(str))

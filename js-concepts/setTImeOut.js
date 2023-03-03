// 1:-----------
// setTimeout(() => {
//     console.log("My name is Inshad Ali")
// },3000)
// console.log("This is to be executed after set timeout")

// 2:-----------
// setTimeout(() =>{console.log("This is delay by 5 seconds")}, 5000)
// setTimeout(() =>{console.log("This is delay by 2 seconds")}, 3000)
// setTimeout(() =>{console.log("This is delay by 1 seconds")}, 1000)

// 3:-----------
// function sum(name, msg){
//     // console.log("Hello", name, msg)
//     console.log(name + msg) 
// }
// setTimeout(sum, 1000, 4, 3)

// 4:-----------
function outer(){
    for(let i=1; i<=5; i++){
        function inner(x){
            setTimeout(function(){
                console.log(x)
            }, x*1000)
        }
        inner(i)
    }
    console.log("Inshad")
}
outer()
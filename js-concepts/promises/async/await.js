async function cool(){
    return "cool hai"
}
cool().then((value)=>{
    console.log(value)
})
// Note -> async function always return a promise
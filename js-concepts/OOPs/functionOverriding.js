const parent = {
    foo : function(){
        console.log('this is by parent')
    }
}

const child = Object.create(parent)

child.foo = function(){
    console.log("This is overriden by child")
}

child.foo()
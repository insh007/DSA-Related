class Stack{
    constructor(){
        this.items = []
        this.maxSize = 7
    }

    // To push element to the stack
    add(element){
        return this.items.push(element)
    }

    // To remove the element from the stack
    remove(){
        if(this.items.length > 0){
            return this.items.pop()
        }else{
            return "stack is already empty"
        }
    } 

    // To get the last element of the stack
    peek(){
        if(this.items.length > 0){
            return this.items[this.items.length-1]
        }else{
            return "stack is already empty"
        }
    }

    // To check if stack is empty
    isEmpty(){
        return this.items.length == 0
    }

    // To check if stack is full
    isFull(){
        return this.items.length == this.maxSize
    }

    // To know the size of the stack
    size(){
        return this.items.length
    }

    // To empty the stack
    clear(){
        return this.items = []
    }
}

// creating an object or instance
let stack = new Stack()
// stack.add(1)
// stack.add(2)
// stack.add(3)
// stack.add(4)
// stack.add(5)
stack.add(6)
// stack.add(7)

// stack.remove()
// stack.clear()

// console.log(stack.remove())
console.log(stack.peek());
// console.log(stack.items)
// console.log(stack.size());

// console.log(stack.isFull());
// console.log(stack.isEmpty())
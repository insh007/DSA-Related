class Node{
    constructor(data, next=null, prev=null){
        this.data = data
        this.next = next
        this.prev = prev
    }
}

// want to add after node value 2 so that result become -> 1, 2, 5, 3, 4
function inserAfterGivenValueDoubly(head, value, newData){
    let newNode = new Node(newData)
    if(head == null){  // list is empty
        head = newNode
        return head
    }
    
    let current = head
    let ptr = current.next
    while(current != null && current.data != value){
        current = current.next
        ptr = ptr.next
    }
    
    newNode.next = ptr
    ptr.prev = newNode
    newNode.prev = current
    current.next = newNode

    return head
}

let Node1 = new Node(1)
let Node2 = new Node(2)
let Node3 = new Node(3)
let Node4 = new Node(4)

Node1.next = Node2
Node2.prev = Node1
Node2.next = Node3
Node3.prev = Node2
Node3.next = Node4
Node4.prev = Node3

let head = Node1

head = inserAfterGivenValueDoubly(head, 2, 5)

// forward Traverse
function forwardTraverse(head){
    let current = head
    while(current != null){
        console.log(current.data)
        current = current.next
    }
}
console.log("forward traverse:")
forwardTraverse(head)

// backward Traverse
function backwardTraverse(tail){
    let current = tail
    while(current != null){
        console.log(current.data)
        current = current.prev
    }
}
console.log("backward traverse:")
backwardTraverse(Node4)







// still I am getting wrong output : forward traverse:
// 1
// 5
// 2
// 3
// 4
// backward traverse:
// 4
// 3
// 2
// 5
// 1       
// the correct output which I want is : forward traverse:
// 1
// 2
// 5
// 3
// 4
// backward traverse:
// 4
// 3
// 5
// 2
// 1
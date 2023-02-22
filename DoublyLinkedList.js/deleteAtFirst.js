class Node{
    constructor(data, next=null, prev=null){
        this.data = data
        this.next = next
        this.prev = prev
    }
}

let Node1 = new Node(55)
let Node2 = new Node(56)
let Node3 = new Node(57)

Node1.next = Node2
Node2.prev = Node1
Node2.next = Node3
Node3.prev = Node2

let head = Node1

function deleteAtFirstDoubly(head){
    
    if(head == null){  // list is empty
        return "lsit is empty"
    }
    
    let newHead = head.next  // new
    newHead.prev = null      // new
    head.next = null         // new

    return newHead           // new
}
head = deleteAtFirstDoubly(head)   // output -> 55, 56


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
backwardTraverse(Node3)
class Node{
    constructor(data, next=null, prev=null){
        this.data = data
        this.next = next
        this.prev = prev
    }
}

function inserAtLastDoubly(head, newData){
    let newNode = new Node(newData)
    if(head == null){  // list is empty
        head = newNode
    }
    
    let current = head
    while(current != null && current.next != null){
        current = current.next
    }
    current.next = newNode
    newNode.prev = current   // extra
}

let Node1 = new Node(55)
let Node2 = new Node(56)
let Node3 = new Node(57)

Node1.next = Node2
Node2.prev = Node1
Node2.next = Node3
Node3.prev = Node2

let head = Node1
inserAtLastDoubly(head, 58)

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
backwardTraverse(Node3.next)
class Node{
    constructor(data, next=null, prev=null){
        this.data = data
        this.next = next
        this.prev = prev
    }
}
let Node1 = new Node(455)
let Node2 = new Node(456)
let Node3 = new Node(457)
Node1.next = Node2
Node2.prev = Node1
Node2.next = Node3
Node3.prev = Node2

let head = Node1

function inserAtFirstDoubly(head, newData){
    let newNode = new Node(newData)
    if(head == null){
        head == newNode
    }

    newNode.next = head
    head.prev = newNode    // extra
    head = newNode
    
    return head
}
head = inserAtFirstDoubly(head, 454)

function forwardTraverse(head){
    let current = head
    while(current != null){
        console.log(current.data)
        current = current.next
    }
}
console.log("forward travaerse")
forwardTraverse(head)

function backwardTraverse(tail){
    let current = tail
    while(current != null){
        console.log(current.data)
        current = current.prev
    }
}
console.log("backward travaerse")
backwardTraverse(Node3)
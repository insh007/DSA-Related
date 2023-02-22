class Node{
    constructor(data, next){
        this.data = data
        this.next = next == undefined ? null : next
    }
}

let Node1 = new Node(44)
let Node2 = new Node(55, new Node(99))
let Node3 = new Node(100)  // insert at last

Node1.next = Node2
Node2.next.next = Node3

// console.log(Node1)

function traverse(head){
    let current = head
    while(current != null){
        console.log(current.data)
        current = current.next
    }
}
traverse(Node1)
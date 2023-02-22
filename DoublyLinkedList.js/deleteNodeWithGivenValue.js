class Node{
    constructor(data, next=null, prev=null){
        this.data = data
        this.next = next
        this.prev = prev
    }
}

// want to delete the node with value 3 so that result become -> 1, 2, 4
function deleteWithGivenValueDoubly(head, value){
    //edge cases
    if (head == null) {
        return head
    }

    if (head.data == value) {
        head = head.next
        head.prev = null
    }

    let current = head
    let ptr = current.next.next 
    //current will reach just before the deleting node 
    while(current.next != null && current.next.data != value){
        current = current.next
        if(ptr != null){
            ptr = ptr.next
        }
    }

    if(ptr != null){
        // here current at present at third last node 
        // at second last the node is present which we want to delete
        // at last ptr is present 
        current.next = ptr  //just like jump by ignoring the node which we want to delete 
        ptr.prev = current
    }
    else{
        // here current at present at second last node
        // at last node the node is present which we want to delete
        // ptr is null here 
        if(current.next != null){
            current.next.prev = null
        }
        current.next = null
    }

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

head = deleteWithGivenValueDoubly(head, 4)

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

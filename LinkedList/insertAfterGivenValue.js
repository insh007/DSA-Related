class Node{
    constructor(data, next=null){
        this.data = data
        this.next = next
    }
}

let head = new Node(1, new Node(2, new Node(3, new Node(4))))

// want to add after node value 3 so that result become -> 1, 2, 3, 10, 4
function insertAfterGivenNodeValue(head, value, newData){
    let newNode = new Node(newData)
    let current = head
    while(current != null && current.data != value){
        current = current.next
    }
    newNode.next = current.next
    current.next = newNode

    // return head
}

insertAfterGivenNodeValue(head, 1, 10)

//Traverse
function traverse(head){
    while(head != null){
        console.log(head.data)
        head = head.next
    }
}
traverse(head)
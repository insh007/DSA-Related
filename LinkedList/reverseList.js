class Node{
    constructor(data, next=null){
        this.data = data
        this.next = next
    }
}

let head = new Node(55, new Node(56, new Node(57)))

function reverse(head){
    let current = head
    let previous = null
    let next = null

    while(current != null){
        next = current.next
        current.next = previous
        previous = current
        current = next
    }
    head = previous
    return head
}

head = reverse(head)

// traverse
function traverse(head){
    while(head != null){
        console.log(head.data)
        head = head.next
    }
}
traverse(head)
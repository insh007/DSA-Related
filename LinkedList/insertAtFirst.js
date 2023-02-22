class Node{
    constructor(data, next){
        this.data = data
        this.next = next == undefined ? null : next
    }
}

let head = new Node(1)

function insetAtFirst(head , newData){
    let newNode = new Node(newData)
    
    newNode.next = head
    head = newNode
    return head
}

head = insetAtFirst(head, 2)

//traverse
function traverse(head){
    let current = head
    while(current != null){
        console.log(current.data)
        current = current.next
    }
}
traverse(head)
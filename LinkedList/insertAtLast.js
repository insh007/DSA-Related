class Node{
    constructor(data, next){
        this.data = data
        this.next = next == undefined ? null : next
    }
}

function inserAtLast(head, newData){
    let newNode = new Node(newData)
    if(head == null){  // list is empty
        head =  newNode
    }

    let current = head
    while(current != null && current.next != null){
        current = current.next
    }
    current.next = newNode
    
}
let head = new Node(444)
inserAtLast(head, 555)

// Traverse
function traverse(head){
    let current = head
    while(current !=null){
        console.log(current.data)
        current = current.next
    }
}
traverse(head)
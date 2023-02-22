class Node{
    constructor(data, next=null){
        this.data = data
        this.next = next
    }
}

let head = new Node(111, new Node(112))

function deleteAtLast(head){
    let current = head
    while(current.next.next != null){
        current = current.next
    }
    current.next = null
    // return head
}
deleteAtLast(head)

//traverse 
function traverse(head){
    while(head!=null){
        console.log(head.data)
        head = head.next
    }
}
traverse(head)
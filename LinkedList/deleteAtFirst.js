class Node{
    constructor(data, next=null){
        this.data = data
        this.next = next
    }
}

let head = new Node(222, new Node(223, new Node(224)))

function deleteAtFirst(head){
    head = head.next
  
    return head
}

head = deleteAtFirst(head)

//traverse
function traverse(head){
    while(head != null){
        console.log(head.data)
        head = head.next
    }
}
traverse(head)
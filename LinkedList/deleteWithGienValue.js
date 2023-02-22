class Node{
    constructor(data, next=null){
        this.data = data
        this.next = next
    }
}

let head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))))

// want to delete the node with value 3 so that result become -> 1, 2, 4, 5
function deleteWithGivenValue(head, value){
    //edge cases
    if (head == null) {
        return head
    }

    if (head.data == value) {
        return head.next
    }

    let current = head
    //current will reach just before the deleting node 
    while(current.next != null && current.next.data != value){
        current = current.next
    }
    current.next = current.next.next  //just like jump by ignoring the node which we want to delete 
    
    return head
}

head =  deleteWithGivenValue(head, 3)

//Traverse
function traverse(head){
    while(head != null){
        console.log(head.data)
        head = head.next
    }
}
traverse(head)
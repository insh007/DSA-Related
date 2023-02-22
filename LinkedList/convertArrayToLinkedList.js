let arr = [44, 33, 99, 55, 60]

class Node{
    constructor(data, next=null){
        this.data = data
        this.next = next
    }
}

function convert(arr){
    let i = 0
    let dummyHead = new Node(0)
    let current = dummyHead
    while(i<arr.length){
        let newNode = new Node(arr[i])
        current.next = newNode
        current = current.next
        i++
    }
    return dummyHead.next
}
// console.log(convert(arr))
let result = convert(arr)

//traverse
while(result!=null){
    console.log(result.data)
    result = result.next
}


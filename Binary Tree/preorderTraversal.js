class Tree{
    constructor(val, left=null, right=null){
        this.val = val
        this.left = left
        this.right = right
    }
}

let root = new Tree(1)
let Node2 = new Tree(2)
let Node3 = new Tree(3)
let Node4 = new Tree(4)
let Node5 = new Tree(5)

root.left = Node3
root.right = Node2
Node2.left = Node4
Node2.right = Node5

/* 
            1
          /   \     
         3     2
              /  \
             4    5
*/

// console.log(root) // print whole tree

// DFS -> Depth-First Search
function preorderTraversal(root){
    let ans = []

    // root -> Left Tree -> Right->
    function traverse(node){
        if(node == null) return []

        ans.push(node.val)
        traverse(node.left)
        traverse(node.right)
    }
    traverse(root)

    return ans
}

console.log(preorderTraversal(root))

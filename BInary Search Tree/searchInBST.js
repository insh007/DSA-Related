// Leetcode: 700. Search in a Binary Search Tree
// You are given the root of a binary search tree (BST) and an integer val.
// Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.
// Example 1:
// Input: root = [4,2,7,1,3], val = 2
// Output: [2,1,3]

// Example 2:
// Input: root = [4,2,7,1,3], val = 5
// Output: []


class Tree{
    constructor(val, left=null, right=null){
        this.val = val
        this.left = left
        this.right = right
    }
}

let root = new Tree(4)
let Node2 = new Tree(2)
let Node3 = new Tree(7)
let Node4 = new Tree(1)
let Node5 = new Tree(3)

root.left = Node2
root.right = Node3
Node2.left = Node4
Node2.right  = Node5

// console.log(root)

/* 
            4
          /   \     
         2     7
        /  \
       1    3
*/

function searchBST(root, val) {
    if(root == null) return null

    while(root){
        if(val == root.val)return root

        else if(val < root.val){
            root = root.left
        }

        else{
            root = root.right
        }
    }
    // return root != null ? true : false
    return root  
};
// console.log(searchBST(root, 7))

//=======================================================================

// Property : BST -> Inorder Traversal of BST gives an ascending sorted array

// DFS -> Depth-First Search
function inorderTraversal(root){
    let ans = []

    // Left Tree -> Right Tree -> Root
    function traverse(node){
        if(node == null) return []
        traverse(node.left)
        ans.push(node.val)
        traverse(node.right)
    }
    traverse(root)

    return ans   // TC -> O(n) SC -> O(n) (call stack or ans array)
}

console.log(inorderTraversal(root))
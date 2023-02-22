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

// Using BFS -> Breadth-First-Search
function levelorderTravrsal(root) {
    if(root == null) return []

    let queue = []
    queue.push(root)
    let ans = []
    
    while(queue.length){
        let levelSize = queue.length
        let currentLevel = []

        for(let i=0; i<levelSize; i++){
            let node = queue.shift() 
            currentLevel.push(node.val)

            if(node.left){
                queue.push(node.left)
            } 

            if(node.right){
                queue.push(node.right)
            } 
        }

        ans.push(currentLevel)
    }

    return ans
};

console.log(levelorderTravrsal(root))

// =======================================================================

//Using Depth-First-Search -> DFS
//main method
var levelOrder = function(root) {
    if(root == null) return []
    
    //calling depth method so that we can find depth and iterate using a loop
    let depth = maxDepth(root)
    let ans = []

    //Looping from first level to last level
    for(let i=1; i<=depth; i++){
        //to store the level nodes 
        let levelNodes = []
        //after calling this will travere level and pushing level nodes to the levelNodes array
        levelOrderTraversal(root, i, levelNodes)
        //pusing level nodes to the ans array so that we can return our required answer
        ans.push(levelNodes)
    }

    return ans
};

//TO Traverse the level
var levelOrderTraversal = function(root, levelNumber, levelNodes){
    if(root == null) return 0

    // if level number = 1 then only root is presetnt and that is our answer so push it into levelNodes array
    if(levelNumber == 1){
        levelNodes.push(root.val)
    }
    else{
    //calling again for left tree by decreasing level by 1 at every time to explore left tree recursively
        levelOrderTraversal(root.left, levelNumber-1, levelNodes)
    //calling again for right tree by decreasing level by 1 at every time to explore right tree recursively 
        levelOrderTraversal(root.right, levelNumber-1, levelNodes)
    }
}

// To find the maximum depth of the tree
var maxDepth = function(root){
    if(root == null) return 0

    //calling maxDepth recursively to find max depth of left tree
    let leftDepth = maxDepth(root.left)
    //calling maxDepth recursively to find max depth of right tree
    let rightDepth = maxDepth(root.right)

    //upper level node depth = same level nodes maximum + 1
    let ans = Math.max(leftDepth, rightDepth) + 1

    return ans
}
console.log(levelOrder(root))
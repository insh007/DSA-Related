let adjList = [
    [1,2],
    [0,2],
    [0,1,3,4],
    [2,4],
    [2,3],
    []
]
function BFSTraverse(adjList){
    let queue = []
    let ans = []
    let visited = new Array(adjList.length).fill(false)

    queue.push(0)
    visited[0] = true
    
    while(queue.length){
        let visitednode = queue.shift()
        ans.push(visitednode)

        for(let i=0; i<adjList[visitednode].length; i++){
            if(visited[adjList[visitednode][i]] == false){
                queue.push(adjList[visitednode][i])
                visited[adjList[visitednode][i]] = true
            }
        }
    }

    return ans
}
console.log(BFSTraverse(adjList))  // output -> [ 0, 1, 2, 3, 4 ]


function DFSTraverse(adjList){
    let stack = []
    let ans = []
    let visited = new Array(adjList.length).fill(false)

    stack.push(0)
    visited[0] = true

    while(stack.length){
        let visitednode = stack.pop()
        ans.push(visitednode)

        for(let i=0; i<adjList[visitednode].length; i++){
            if(visited[adjList[visitednode][i]] == false){
                stack.push(adjList[visitednode][i])
                visited[adjList[visitednode][i]] = true
             }
        }
    }

    return ans
}
console.log(DFSTraverse(adjList)) // output -> [ 0, 2, 4, 3, 1 ]
//TC: O(V+E)
//SC: O(V+2*E + V+ V)

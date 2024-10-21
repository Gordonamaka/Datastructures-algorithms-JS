// Depth first Search - Pseudocode


// # Global or Class scope variables - Initalize the three variables
// n = number of nodes in the graph
// g = adjacency list representing graph
// let visited = [false, ...arguments, false] // Size n - false at index i to tell that it has not been visited - We have visited none yet

// function visit(n){if(!visited[n]){visit(n)}}

function dfs(at) {

  // let visited = []
  // let g = []

  // - IMPORTANT - This algorithm is inherently recurisve 

  // if (visited[at]) return // - Since it is already visited we have no business here


  // visited[at] = true // - Otherwise, lets visit this node & mark it as true

  // let neighbours = g[at] // - Reach into the adjacency list, explore by looping and recursively calling dfs method

  // for (next in neighbours) {
    // dfs(next)
  // }


}

// Start DFS at node Zero - to do the exploration
let start_node = 0
dfs(start_node)

// Find connected components - Start a DFS at every node (except if it's already been visited) and mark all reachable nodes as being part of the same component - Pseudocode

// # Global or class scope variables
// n = number of nodes in the graph
// g = adjacency list representing graph

let count = 0 // Tracks the number of connected components
let components = [] // empty integer array # size n - Holds the integer value of which the node belongs to
let visited = [false, ...components, false] // # size n

function findComponents() {
  
  for (i = 0; i < n; i++) { // loop over every node
  
    if (!visited[i]) { // Check if it has been visited
  
      count++
  
      dfs(i) // We run the DFS on every unvisited node & mark them as visited - see dfs function - We never revisit the same node more than once
  
    }
  }
  
  return (count, components)

}

function dfs(at) {

  visited[at] = true // Mark the current node as visited 
  
  components[at] = count // Set the current node as the value of count
  
  for (next in g[at]) { 
  
    if (!visited[next]) { // for every neighbouring node that has not been visited
  
      dfs(next) // call the dfs
  
    }
  
  }
}


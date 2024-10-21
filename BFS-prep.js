// Breadth First Search Algorithm - Shortest Path - Pseudocode

// Global/class scope variables
// n = number of nodes in the graph
// g = adjacency list representing unweighted graph

// s = start node, e = end node, and 0 =< e,s < n
function bfs(s,e) {

// Do a BFS starting at node s
let prev = solve(s)

// Return reconstructed path from s -> e
return reconstructPath(s, e, prev)

}

// solve method
function solve(s) {
  // q = queue data structure with enqueue and dequeue
  let q = [s]
  // q.enqueue(s)
  let visited = [false, ...arguments, false]    // # size n (number of nodes in the graph)
  
  visited[s] = true     // Track the first as visited, this is to check whether node i has been visited

  let prev = [null, ...arguments, null]     // # size n - reconstruct the shortest path - checks the parent of node i
  
  // while !q.isEmpty()                     // or !q[s].length == 0 - loop while the queue is not empty
  
  // node = q.dequeue()                     // This is to pull out the top node from the queue
  
  // neighbours = g.get(node)               // Reach to the adjancey list to get all the neighbouring nodes

  // for (next in neighbours) {   // Loop over each unvisited node
  
  // if !visited[next] {        // If the next is not visited...
  
      // q.enqueue(next)        // when we find a next unvisited node, add to the queue - .push
      
      // visited[next] = true   // Mark it as visited
      
      // prev[next] = node      // Keep track of the next node of the parent node in the prev array
    
    // }

    // return prev              // Once it is empty and the bfs is completed - return prev
  // }

}



function reconstructPath(s, e, prev) {

  // Reconstruct path going backwards from e
  let path = []
  // for(i = e; i != null; i = prev[i]) {    // The prev array had to have all null variables because it is to check whether the for loop should stop
    
    // path.push(i) // path.add(at)
  
  // }

  path.reverse() // Prev starts backwards at the end node - We need to reverse the path to ensure it starts at the start node and ends at the end node

  // If s and e are connected return the path - we have to ensure the paths between s & e are connected
  if (path[0] == s) {
    return path
  }
  return [] // if the path is disjoint, return empty array

}
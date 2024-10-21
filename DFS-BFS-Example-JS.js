// Graph Algorithm JS Example

// The Data
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');
// The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

const routes = [
  ['PHX', 'LAX'],
  ['PHX', 'JFK'],
  ['JFK', 'OKC'],
  ['JFK', 'HEL'],
  ['JFK', 'LOS'],
  ['MEX', 'LAX'],
  ['MEX', 'BKK'],
  ['MEX', 'LIM'],
  ['MEX', 'EZE'],
  ['LIM', 'BKK'],
];

// The Graph

/* The adjanceny list is more benefical than looping through the array because the array contains many zero's - The matrix would be very spare, hence it would be very inefficient overwise. */

let adjacencyList = new Map(); // Acts like a dictionary or hashmap

// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

// Add node
function addNode(airport) {
  
  adjacencyList.set(airport, []); // Represents a node on the graph
  // The set syntax binds an object property to a function to be called when there is an attempt to set that property.

}

// Add edge, undirected
function addEdge(origin, destination) {
  
  adjacencyList.get(origin).push(destination);

  adjacencyList.get(destination).push(origin); // Inverse

  // The get syntax binds an object property to a function that will be called when that property is looked up. 

}

// Create the Graph

airports.forEach(addNode); // Add a node to the graph
//  The forEach() method of Array instances executes a provided function once for each array element.

routes.forEach(route => addEdge(...route)) // Add an edge for each in the array
// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.
/* The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created. Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax.

The difference?

while the spread operator expands elements of an iterable, the rest operator compresses them. It collects several elements. In functions when we require to pass arguments but were not sure how many we have to pass, the rest parameter makes it easier. Note: There must be only one rest operator in javascript functions.
*/

// console.log("List", adjacencyList)

// BFS Breadth First Search

function bfs(start) { // Have to start somewhere

  // First in last out sort of arrangement. In JS queues are Arrays
  const queue = [start] 

  // A value in the set may only occur once. Hence, all values are unique in this array.
  const visited = new Set(); 

  // Want to visit all the child
  while (queue.length > 0) {

    // Shift(): Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
    const airport = queue.shift();


    // Give us all the airports as the children
    const destinations = adjacencyList.get(airport); 

    // Iterative Search
    for (const destination of destinations) { 

      if (destination === 'BKK') {

        console.log('BFS found Bangkok');
        
      }
            
      // Only enqueue an item if it hasn't been visited. Set has a has method: returns — a boolean indicating whether an element with the specified value exists in the Set or not.
      if (!visited.has(destination)) { 
        
        // Appends a new element with a specified value to the end of the Set.
        visited.add(destination); // Marking as visited
        queue.push(destination); // Enqueue
        console.log(destination);
      }

    }

  }

}

// bfs('PHX') // Good at finding all possible routes

// DFS Depth First Search for Efficiency


function dfs(start, visited = new Set()) { // We are going to use a recursive function

  console.log(start)

  visited.add(start);

  let steps = 0

  const destinations = adjacencyList.get(start);

  for (const destination of destinations) {

    steps++

    if (destination === 'BKK') {

      console.log(`DFS found Bangkok in ${steps} steps`);
      return;
      
    }

    if (!visited.has(destination)) { 
      // If it has not been visited, we call the same function recursively
      
      dfs(destination, visited); // Searches deeper until it finds it's stopping point - It will keep calling itself until all the airports have been visited.

    }


  }


}

dfs('PHX')


/* Time complexicity O(N) where O is (V+E) - Scales Linear depending on the amount of nodes / edges are added to the graph */
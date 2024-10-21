function shiftGrid(grid, k) {
  const m = grid.length;
  const n = grid[0].length;

  // Calculate total number of elements in the grid
  const totalElements = m * n;

  // Flatten the grid to simplify shifting
  let flattenedGrid = grid.flat();
  /* 
  The maximum recursion depth - Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
  
  https://www.youtube.com/watch?v=d3TJbWvfSgw&ab_channel=FlorinPop
  */

  // Calculate the actual number of shifts required (k % totalElements)
  k %= totalElements;
  // The % operator computes the remainder after dividing its first operand by its second. All numeric types have predefined remainder operators. It is the same as a = a % b;

  // Perform the shift operation k times
  for (let i = 0; i < k; i++) {

    // Remove the last element and insert it at the beginning
    flattenedGrid.unshift(flattenedGrid.pop());
  
  }

  // Restore the 2D structure
  const result = [];
  for (let i = 0; i < m; i++) {
  
    result.push(flattenedGrid.slice(i * n, (i + 1) * n));
    /* Method Explanation:
    
      result.push(flattenedGrid.slice(i * n, (i + 1) * n));: Inside the loop, we use the slice() method to extract a portion of the flattenedGrid array corresponding to the current row.
      
      i * n: Calculates the starting index of the current row in the flattened array. Since each row has n elements, multiplying the row index i by n gives the index where the row starts.
      
      (i + 1) * n: Calculates the ending index of the current row in the flattened array. Adding 1 to the row index i and then multiplying by n gives the index where the next row starts. Subtracting 1 would give us the ending index of the current row, but since the slice method takes an exclusive end index, we don't need to subtract 1.
      
      So, flattenedGrid.slice(i * n, (i + 1) * n) extracts the elements corresponding to the current row from index i * n (inclusive) to (i + 1) * n (exclusive), effectively retrieving the elements of the current row.
    
    */

  }

  return result;

}

// Example usage:
const grid1 = [[1,2,3],[4,5,6],[7,8,9]];
const k1 = 1;
console.log(shiftGrid(grid1, k1)); // Output: [[9,1,2],[3,4,5],[6,7,8]]

const grid2 = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]];
const k2 = 4;
console.log(shiftGrid(grid2, k2)); // Output: [[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]

const grid3 = [[1,2,3],[4,5,6],[7,8,9]];
const k3 = 9;
console.log(shiftGrid(grid3, k3)); // Output: [[1,2,3],[4,5,6],[7,8,9]]



// Optimized
function shiftGrid(grid, k) {
  const m = grid.length;
  const n = grid[0].length;
  
  // Calculate total number of elements in the grid
  const totalElements = m * n;

  // Calculate the actual number of shifts required (k % totalElements)
  k %= totalElements;
  
  const newGrid = new Array(m).fill(null).map(() => new Array(n).fill(0));
  
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          // Calculate the linear index of the current element
          const linearIndex = i * n + j;
          
          // Calculate the new linear index after shifting
          const newLinearIndex = (linearIndex + totalElements - k) % totalElements;
          
          // Calculate the new row and column indices
          const newRow = Math.floor(newLinearIndex / n);
          const newCol = newLinearIndex % n;
          
          // Update the new grid with the shifted element
          newGrid[newRow][newCol] = grid[i][j];
      }
  }
  
  return newGrid;
}

// Example usage:
console.log(shiftGrid(grid1, k1)); // Output: [[9,1,2],[3,4,5],[6,7,8]]

console.log(shiftGrid(grid2, k2)); // Output: [[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]

console.log(shiftGrid(grid3, k3)); // Output: [[1,2,3],[4,5,6],[7,8,9]]

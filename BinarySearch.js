// Binary Search - Divide & conquer

/* Big-O Guide 
Calculation not dependent on input size - O(1)
1 Loop - O(n)
2 nested loops - O(n^2)
Input size reduced by half - O(logn)
*/

let binary = [-5, 2, 4, 6, 10]

function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1


  while(leftIndex <= rightIndex) {
    let middleIndex = Math.floor( (leftIndex + rightIndex) / 2)
    if(target === arr[middleIndex]) {
      return middleIndex
    }
    if(target < arr[middleIndex]) {
      rightIndex = middleIndex - 1
    } else {
      leftIndex = middleIndex + 1
    }
  }
  return 'Target does not exist within array.'
}

console.log(binarySearch(binary, 10)); // At the fourth index
console.log(binarySearch(binary, 6)); // At the third index
console.log(binarySearch(binary, 20)); // Returns -1 because 20 doesn't exist in array


// Recursive Binary Search - Identify the base case for recursion
function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length -1)
}

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return 'Target does not exist within array.'
  }

  let middleIndex = Math.floor(( leftIndex + rightIndex ) / 2)
  if (target === arr[middleIndex]) {
    return middleIndex
    
  }
  if (target < arr[middleIndex]) { 
    return search(arr, target, leftIndex, middleIndex -1)
  } else {
    return search(arr, target, middleIndex +1, rightIndex)
  }
}

console.log(recursiveBinarySearch(binary, 10)); // At the fourth index
console.log(recursiveBinarySearch(binary, 6)); // At the third index
console.log(recursiveBinarySearch(binary, 20));

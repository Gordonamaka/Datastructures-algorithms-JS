/* Quick sort Idea 
Identify the pivot element in the array, iterate over the numbers and if the numbers are less than pivot, push into separate arrays then concat.
*/

const arr = [8, 20, -2, 4, -6];

function quickSort(arr) {
  if (arr.length < 2) {
    return arr; // This is the base case for recursion.
  }
  let pivot = arr[arr.length -1]; // Find the pivot as the last element in the array
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length -1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort(arr))
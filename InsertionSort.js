// Insertion Sort

function insertionSort (arr){

  for (let i = 1; i < arr.legth; i++) {
    let numbertoInsert = arr[i];
    let j = i - 1 // We need an element for comparsion for the next loop
    
    while(j >= 0 && arr[j] > numbertoInsert) { // Iterate and continually check
      arr[j + 1] = arr[j];
      j--; // or j = j-1 - Because we loop backwards
    }
    arr[j + 1] = numbertoInsert
  }
  // Implicit return of original array modified
}

const arr = [2, 4, 9, 14, 23, 7]
insertionSort(arr);
console.log(arr);

// Big-O = O(n^2) : Nested Loop
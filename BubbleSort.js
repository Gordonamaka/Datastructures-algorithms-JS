// Bubble Sort O(n^2)

function sort(numbers) {

  for (let i = 0; i < numbers.length; ++i){
    // Walk to through until it gets smaller and smaller
    for (let j = 0; j < numbers.length - (i + 1); ++j) { // (i + 1) bc you dont want to go to the end
      const left = numbers[j];
      const right = numbers[j + 1]
      if (left > right) {
        numbers[j] = right;
        numbers[j + 1] = left;
        // After one iteration we have the highest number in the highest position & repeat
      }
    }
  }
  return numbers;
}


console.log(sort([3,2,1]));
console.log(sort([1,2,3,4,5,6,7]));
console.log(sort([1,4,6,4]));
console.log(sort([]));
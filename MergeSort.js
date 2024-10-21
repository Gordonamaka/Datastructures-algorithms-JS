// Merge Sort

function mergeSort(arr) {
  if(arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2)

  //The index to the beginning of the specified portion of stringObj.Returns a section of a string.
  const leftArr = arr.slice(0, mid);

  const rightArr = arr.slice(mid)

  return merge(mergeSort(leftArr), mergeSort(rightArr))

}

function merge(leftArr, rightArr) {
  const sortedArr = []

  while(leftArr.length && rightArr.length) {
    if(leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift()) // Return the first element & pushes
    } else {
      sortedArr.push(rightArr.shift())
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr]
}


const arr = [8, 20, -2, 4, -6]

console.log(mergeSort(arr))
// Merge Sort - Divide & Conquer - O(n)

/* Pseudocode 

Returns a sorted list of values by sorting the list
Using the merge sort Algorithm

function MergeSort(lst) {

  if (length(lst)) == 0 {
    return []
  }
  
  return MergeSort(0, length(lst)-1, lst) // Negative index if length is zero
}

function MergeSort(low, high, lst) {

  if (lo == hi) {
    // Make sure this is a deep copy of lst
    //  Do not just return 'lst'
    return [lst[low]]
  }

  mid = (low + high) / 2

  left = MergeSort(low, mid, lst)
  right = MergeSort(mid+1, high, lst) - Mid+1 so there is no overlap

  return Merge(left, right)
}

This functions merges two already sorted lists
'Left' & 'Right' into one lorger sorted list


function Merge(left, right) {
  sorted_list = [];
  l = 0;
  r = 0;

  while(l != length(left) or r != length(right)) {
    if l == length(left) {
      sorted_list.add(right[r])
      r += 1
    } else if (r == length(right)) {
      sorted_list.add(left[l])
      l += 1
    } else { // left[l] >= right[r]
      sorted_list.add(right[r])
      r += 1
    }
  
  }

  return sorted_list

}


*/

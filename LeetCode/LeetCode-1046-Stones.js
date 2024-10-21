function lastStoneWeight(stones) {
    while (stones.length > 1) {
        stones.sort((a, b) => b - a); // Sort stones in descending order
        
        const smashResult = stones[0] - stones[1];
        
        stones.splice(0, 2); // Remove the two heaviest stones
        
        if (smashResult !== 0) {
        
          stones.push(smashResult); // Add the result of smashing if it's not zero
        
        }
    }
    
    return stones.length === 0 ? 0 : stones[0]; // Return the last remaining stone's weight or 0 if no stone left
}

// Example usage:
const stones1 = [2, 7, 4, 1, 8, 1];
console.log(lastStoneWeight(stones1)); // Output: 1

const stones2 = [1];
console.log(lastStoneWeight(stones2)); // Output: 1


/* 
This function sorts the stones array in descending order and repeatedly removes the two heaviest stones from the beginning of the array, smashing them together and updating the array until only one stone is left. Then, it returns the weight of the last remaining stone or 0 if there are no stones left.
*/

/* stones.sort() 

Function used to determine the order of the elements. It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.

[11,2,22,1].sort((a, b) => a - b)

Sorts an array in place. This method mutates the array and returns a reference to the same array.

https://www.youtube.com/watch?v=RsFBsBep-hA&ab_channel=FlorinPop
*/

/* stones.splice()

The zero-based location in the array from which to start removing elements.

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

@returns — An array containing the elements that were deleted.

https://www.youtube.com/watch?v=FFas8cMHVwg&ab_channel=FlorinPop
*/

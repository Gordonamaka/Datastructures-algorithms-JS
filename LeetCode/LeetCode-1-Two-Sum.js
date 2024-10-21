function twoSum(nums, target) {
    
    // Create a Map to store the indices of elements
    const numIndices = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]; // Get all the numbers
        const complement = target - num; // Compare them to the target
        
        // Check if the complement's index is already stored in the Map
        if (numIndices.has(complement)) {
            // If found, return the indices of the current element and its complement
            return [numIndices.get(complement), i];
        }
        
        // Store the current element's index in the Map
        numIndices.set(num, i);
    }
    
    return [];
}

// Example usage:
const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log(twoSum(nums1, target1)); // Output: [0, 1]

const nums2 = [3, 2, 4];
const target2 = 6;
console.log(twoSum(nums2, target2)); // Output: [1, 2]

const nums3 = [3, 3];
const target3 = 6;
console.log(twoSum(nums3, target3)); // Output: [0, 1]

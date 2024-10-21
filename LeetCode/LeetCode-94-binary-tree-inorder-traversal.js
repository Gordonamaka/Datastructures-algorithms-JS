/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
class TreeNode { // This is the same as above - the variables are just pre-defined
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
   
var inorderTraversal = function(root) {
    
    if (!root) {
      return [];
    }

    const result = [];
    result.push(...inorderTraversal(root.left));
    result.push(root.val);
    result.push(...inorderTraversal(root.right));
    
    return result

};

const root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

console.log(inorderTraversal(root));

/* This JavaScript code defines a TreeNode class to represent the nodes of the binary tree and an inorderTraversal function that performs the inorder traversal recursively. You can use this function with the root of your binary tree to get the inorder traversal of its nodes' values. 

Intuition
The inorder traversal of a binary tree visits the left subtree, the root, and then the right subtree. The goal is to accumulate the node values in the correct order.

Approach
We use a recursive helper function to perform the inorder traversal.
In the helper function, we traverse the left subtree, add the root value to the result, and then traverse the right subtree.
The base case ensures that the traversal stops when we reach a null node.

Complexity
Time Complexity: O(n), where n is the number of nodes in the binary tree. We visit each node once.
Space Complexity: O(h), where h is the height of the binary tree. The space is used for the recursive call stack, and in the worst case (skewed tree), it's O(n). In the average case (balanced tree), it's O(log n).
*/
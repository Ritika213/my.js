//Given the root of a BST and an integer k, the task is to find the kth smallest element in the BST. If there is no kth smallest
// element present then return -1.

Examples:

Input: root = [20, 8, 22, 4, 12, N, N, N, N, 10, 14], k = 3
    
Output: 10
Explanation// 10 is the 3rd smallest element in the BST.

Input: root = [2, 1, 3], k = 5
    
Output: -1
Explanation:// There is no 5th smallest element in the BST as the size of BST is 3.
Constraints
//1 ≤ number of nodes, k ≤ 104
//1 ≤ node->data ≤ 104



// User function Template for javascript

/*
class Node
{
    constructor(x){
        this.data=x;
        this.left=null;
        this.right=null;
    }
}
*/

/**
 * @param {Node} root
 * @param {number} k
 * @return {number}
 */
class Solution {
    kthSmallest(root, k) {
        
         let stack = [];
    let curr = root;
    let count = 0;

    while (curr !== null || stack.length > 0) {
        while (curr !== null) {
            stack.push(curr);
            curr = curr.left; // Traverse left
        }
        curr = stack.pop();
        count++;

        if (count === k) return curr.data; // Found k-th smallest

        curr = curr.right; // Move to right subtree
    }

    return -1;
    }
}
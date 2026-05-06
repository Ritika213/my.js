//Given the root of a binary tree, return the size of the tree. The size of a binary tree is the total number of nodes in the tree.

Examples:

Input:      

Output:  3
Explanation// There are 3 nodes in the given binary tree, so its size is 3.
Input:

Output: 6
Explanation: //There are 6 nodes in the given binary tree, so its size is 6.
Constraints
//1 ≤ number of nodes ≤ 105
//1 ≤ node->data ≤ 105

/*
Definition for Node
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/
/**
 * @param Node root
 * @returns number
 */
class Solution {
    getSize(root) {
        // code here
        if (!root) return 0;

        let count = 0;
        let queue = [];
        queue.push(root);

        while (queue.length > 0) {
            let node = queue.shift();
            count++;

            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }

        return count;
    }
}
//Given the root of a Binary Search Tree (BST) containing n (n > 1) nodes, find the minimum absolute difference
//  between the values of any two different nodes in the tree.

//Return the minimum absolute difference.

Examples:

Input: root= [50, 30, 70, 20, N, 60, 80]
420046990
Output: 10
Explanation //There are no two nodes whose absolute difference is smaller than 10.
Input: root = [60, 30, 90, 10]
2056957925
Output: 20
Explanation:// There are no two nodes whose absolute difference is smaller than 20.
Constraints

//2 ≤ size of binary tree ≤ 105
//0 ≤ node.data ≤ 106

/* Binary Tree Node Structure
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}
*/

/**
 * @param {Node} root
 * @return s {number}
 */

class Solution {
    constructor() {
        this.prev = -1;
        this.minDiff = Infinity;
    }

    inorder(root) {
        if (root === null) return;

        this.inorder(root.left);

        if (this.prev !== -1) {
            let diff = root.data - this.prev;
            if (diff < this.minDiff) {
                this.minDiff = diff;
            }
        }

        this.prev = root.data;

        this.inorder(root.right);
    }

    absDiff(root) {
        this.prev = -1;
        this.minDiff = Infinity;

        this.inorder(root);

        return this.minDiff;
    }
}


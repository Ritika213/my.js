//Given the root of a Binary Tree, your task is to return its Postorder Traversal.

Note:// A postorder traversal first visits the left child (including its entire subtree), then visits the right child (including 
    //its entire subtree), and finally visits the node itself.

Examples:

Input: root = [19, 10, 8, 11, 13]

Output: [11, 13, 10, 8, 19]
Explanation:// The postorder traversal of the given binary tree is [11, 13, 10, 8, 19].
Input: root = [11, 15, N, 7]
 
Output: [7, 15, 11]
Explanation: //The postorder traversal of the given binary tree is [7, 15, 11].
Constraints
//1 ≤ number of nodes ≤ 3*104
//0 ≤ node->data ≤ 105


/**
 * @param {Node} root
 * @returns {number[]}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution {
    postOrder(root) {
        // code here
        const result = [];
    this.post(root, result);
    return result;
    }
     post(root, result) {
    if (root !== null) {
        this.post(root.left, result);
        this.post(root.right, result);
        result.push(root.data);
    }
    }
}



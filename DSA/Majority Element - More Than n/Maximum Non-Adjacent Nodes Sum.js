//Given the root of a binary tree with integer values. Your task is to select a subset of nodes such that the sum of their
 //values is maximized, with the condition that no two selected nodes are directly connected that is, if a node is included in the
 // subset, neither its parent nor its children can be included.

Examples:

Input: root = [11, 1, 2]

Output: 11
Explanation// The maximum sum is obtained by selecting the node 11.

Input: root = [1, 2, 3, 4, N, 5, 6]

Output: 16
Explanation //The maximum sum is obtained by selecting the nodes 1, 4, 5 and 6, which are not directly connected to each other.
 //Their total sum is 16.  

 Constraints
//1 ≤ number of nodes ≤ 104
//1 ≤ node.data ≤ 105

class Solution {
     solve( root){
        if (root === null) return [0, 0];
        let left = this.solve(root.left);
        let right = this.solve(root.right);
        let include = root.data + left[1] + right[1];
        let exclude = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
        return  [include,exclude];
    }
    getMaxSum(root) {
        // code here
       let raj = this.solve(root);
        return Math.max(raj[0], raj[1]); 
    }
}

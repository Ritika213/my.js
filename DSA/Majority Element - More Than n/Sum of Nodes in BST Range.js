//Given the root of a Binary Search Tree and two integers l and r, the task is to find the sum of all nodes that lie between l and r,
 //including both l and r.

Examples

Input: root = [22, 12, 30, 8, 20], l = 10, r = 22
     
Output: 54
Explanation// The nodes in the given Tree that lies in the range [10, 22] are {12, 20, 22}. Therefore, the sum of nodes is 12 + 20 + 22 = 54.

Input: root = [8, 5, 11, 3, 6, N, 20], l = 11, r = 15  
     
Output: 11
Explanation: //The nodes in the given Tree that lies in the range [11, 15] is {11}. Therefore, the sum of node is 11.
Constraints
//0 ≤ number of nodes ≤ 104
//0 ≤ node->data ≤ 104
//0 ≤ l ≤ r ≤ 104





/**
 * @param {Node} root
 * @param {Number} l
 * @param {Number} r
 * @returns {Number}
 */

/*
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution {
    nodeSum(root, l, r) {
        
       let sum =0;
       function dfs(node){
           if(!node) return;
           
           // add node.data to sum if l <= node.data <= r
           if(node.data >= l && node.data <= r){
               sum += node.data;
           }
           
           // explore left subtree if node.data > l
           if(node.data >l){
               dfs(node.left)
           }
           
           //explore right subtree if node.data <r
           if(node.data <r){
               dfs(node.right)
           }
       }
       dfs(root)
       return sum;
        
    }
}

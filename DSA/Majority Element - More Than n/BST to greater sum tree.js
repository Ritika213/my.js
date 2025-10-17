//Given the root of a  BST with unique node values, transform it into greater sum tree where each node contains sum of all nodes
// greater than that node.

Examples:

Input: root = [11, 2, 29, 1, 7, 15, 40, N, N, N, N, N, N, 35, N]
      
Output: [119, 137, 75, 139, 130, 104, 0, N, N, N, N, N, N, 40, N]
Explanation// Every node is replaced with the sum of nodes greater than itself. 

Input: root = [2, 1, 6, N, N, 3, 7]
     
Output: [16, 18, 7, N, N, 13, 0]
Explanation// Every node is replaced with the sum of nodes greater than itself. 

Constraints 
//1 ≤ node->data ≤ 3*104
//1 ≤ number of nodes ≤ 3*104


/**
 * @param {Node} root
 * @return {void}
 */

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

class Solution {
     solve( root, sum){
        if(!root)return 0;
        let r = this.solve(root.right, sum);
        let l = this.solve(root.left, root.data+sum+r);
        let to_return = root.data+l+r;
        root.data = r+sum;
        return to_return;
    }
    transformTree(root) {
        // code here
        this.solve(root,0)
    }
}
     
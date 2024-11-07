//Given a binary tree, where every node value is a number. Find the sum of all the numbers that are formed from root to leaf paths. 
//The formation of the numbers would be like 10*parent + current (see the examples for more clarification).

Examples:

Input :      

Output: 13997
Explanation // There are 4 leaves, resulting in leaf path of 632, 6357, 6354, 654 sums to 13997.

Input :    

Output : 2630
Explanation: //There are 3 leaves, resulting in leaf path of 1240, 1260, 130 sums to 2630.
Input :    
           1
          /
         2                    
Output : 12
Explanation// There is 1 leaf, resulting in leaf path of 12.

Constraints
//1 ≤ number of nodes ≤ 31
//1 ≤ node->data ≤ 100

class Solution {
    constructor() {
        this.ans = 0;
    }
     treePathsSumHelper(node, temp) {
        if (!node) return;

        temp = temp * 10 + node.key;

        if (!node.left && !node.right) {
            this.ans += temp;
            return;
        }

        if (node.left) {
            this.treePathsSumHelper(node.left, temp);
        }

        if (node.right) {
            this.treePathsSumHelper(node.right, temp);
        }
    }
    treePathsSum(node) {
        
       this.ans = 0;
        
        this.treePathsSumHelper(node, 0);
        
        return this.ans; 
    }
}
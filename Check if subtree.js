//Given two binary trees with roots root1 (for tree T) and root2 (for tree S), each containing at most N nodes. Determine whether
//  tree S is a subtree of tree T.

//Return true if S is a subtree of T, otherwise return false.

//Note: A tree S is considered a subtree of T if there exists a node in T such that the subtree rooted at that node is identical to S.
//  Two trees are identical if they have the same structure and the same node values.

Examples:

Input: root1 = [1, 2, 3, N, N, 4], root2 = [3, 4]
             
Output: true 
Explanation// In the tree rooted at root1, the subtree starting at node 3 is identical to the tree rooted at root2 (same structure 
// and node values). Hence, root2 is a subtree of root1, so the output is true.

Input: root1 = [26, 10, N, 20, 30, 40, 60], root2 = [26, 10, N, 20, 30, 40, 60]
                        
Output: true 
Explanation:// Both root1 and root2 represent identical trees. So, root2 is a subtree of root1, and the output is true.
Constraints
//1 ≤ n ≤ 103
//1 ≤ value of nodes ≤ 104

/*
Definition for Node
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}
*/
class Solution {
    isSubTree(root1, root2) {

        function check(root1, root2) {

            if (root1 === null || root2 === null) {
                return (root1 === null && root2 === null);
            }

            if (root1.data !== root2.data) {
                return false;
            }

            return check(root1.left, root2.left) &&
                   check(root1.right, root2.right);
        }

        function solve(root1, root2) {

            if (root1 === null) {
                return false;
            }

            if (root1.data === root2.data &&
                check(root1, root2)) {
                return true;
            }

            return solve(root1.left, root2) ||
                   solve(root1.right, root2);
        }

        return solve(root1, root2);
    }
}
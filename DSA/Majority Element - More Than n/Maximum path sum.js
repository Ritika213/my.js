//Given the root of a binary tree, your task is to find the maximum path sum. The path may start and end at any node in the tree.

Examples:

Input: root = [10, 2, 10, 20, 1, N, -25, N, N, N, N, 3, 4]
Output: 42
Explanation// Max path sum is represented using green colour nodes in the above binary tree.

Input: root = [-17, 11, 4, 20, -2, 10]
Output: 31
Explanation:// Max path sum is represented using green colour nodes in the above binary tree.

Constraints
//1 ≤ number of nodes ≤ 103
//-104 ≤ node->data ≤ 104

class Solution {
    findMaxSum(root) {
        
        let maxSum = -999999999
        let recursion = (node) =>{
            if(!node || node === null) return 0;
            let left = Math.max(0, recursion(node.left))
            let right = Math.max(0, recursion(node.right))
            maxSum= Math.max(maxSum, left + right + node.data)
            return node.data + Math.max(left, right)
        }
        recursion(root)
        return maxSum;
    }
}

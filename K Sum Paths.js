//Given the root of a binary tree and an integer k, determine the number of downward-only paths where the sum of the node values 
// in the path equals k.

Note:// A path can start and end at any node within the tree but must always move downward (from parent to child).

Examples:

Input: root = [8, 4, 5, 3, 2, N, 2, 3, -2, N, 1], k = 7

Output: 3

Output: 3
Explanation //The following paths sum to k

Input: root = [1, 2, 3], k = 3

Output: 2 
Explanation// The following paths sum to k

Constraints
//1 ≤ number of nodes ≤ 104
//-100 ≤ node value ≤ 100
//-109 ≤ k ≤ 109

/**
 * @param {Node} root
 * @param {number} k
 * @return {number}
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

    dfs(node, k, currentSum, map) {
        if (node === null) return 0;

        currentSum += node.data;

        let count = 0;

        if (map.has(currentSum - k)) {
            count += map.get(currentSum - k);
        }

        map.set(currentSum, (map.get(currentSum) || 0) + 1);

        count += this.dfs(node.left, k, currentSum, map);
        count += this.dfs(node.right, k, currentSum, map);

        map.set(currentSum, map.get(currentSum) - 1);

        return count;
    }

    countAllPaths(root, k) {
        let map = new Map();
        map.set(0, 1);

        return this.dfs(root, k, 0, map);
    }
}


//Given a height **h**, find the maximum number of distinct balanced binary trees of height exactly h.

//A binary tree is balanced if, for every node, the heights of its left and right subtrees differ by at most 1.
// A tree with a single node has height 1. An empty tree has height 0.

//Note: Since the answer can be very large, return it modulo 109 + 7.

//Given a height h, find the maximum number of distinct balanced binary trees of height exactly h.

//A binary tree is balanced if, for every node, the heights of its left and right subtrees differ by
//  at most 1. A tree with a single node has height 1. An empty tree has height 0.

Note: //Since the answer can be very large, return it modulo 109 + 7.

Examples:

Input: h = 1
Output: 1
Explanation: //Only one tree of height 1 exists i.e. a single node.
Input: h = 2
Output: 3 
Explanation// 3 distinct balanced trees of height 2 exist.

Input: h = 3
Output: 15
Explanation:// 15 distinct balanced trees of height 3 exist.

Constraints

//1 ≤ h ≤ 106



/**
 * @param {number} h
 * @returns {number}
 */

class Solution {
    countBT(h) {
        const MOD = 1000000007n;

        if (h === 1) return 1;

        let prev2 = 1n, prev1 = 1n;

        for (let i = 2; i <= h; i++) {
            let curr = (prev1 * prev1 +
                        2n * prev1 * prev2) % MOD;

            prev2 = prev1;
            prev1 = curr;
        }

        return Number(prev1);
    }
}

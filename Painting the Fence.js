//Given a fence with n posts and k colours, find out the number of ways of painting the fence so that not more than two consecutive
//  posts have the same colours.
//Answers are guaranteed to be fit into a 32 bit integer.

Examples:

Input: n = 3, k = 2 
Output: 6
Explanation: //Let the 2 colours be 'R' and 'B'. We have following possible combinations:
//1. RRB
//2. RBR
//3. RBB
//4. BRR
//5. BRB
//6. BBR
Input: n = 2, k = 4 
Output: 16
Explanation// After coloring first post with 4 possible combinations, you can still color next posts with all 4 colors. 
// Total possible combinations will be 4x4=16

Constraints
//1 ≤ n ≤ 300
//1 ≤ k ≤ 105

/**
 * @param {number} n
 * @param {number} k
 * @returns {number}
 */
class Solution {
    countWays(n, k) {
        // code here
         const mod = 1000000007n;

        n = BigInt(n);
        k = BigInt(k);

        if (n === 1n) return Number(k % mod);
        if (n === 2n) return Number((k + k * (k - 1n)) % mod);

        let same = k % mod;
        let diff = (k * (k - 1n)) % mod;
        let total = (same + diff) % mod;

        for (let i = 3n; i <= n; i++) {
            same = diff % mod;
            diff = (total * (k - 1n)) % mod;
            total = (same + diff) % mod;
        }

        return Number(total);
    }
}

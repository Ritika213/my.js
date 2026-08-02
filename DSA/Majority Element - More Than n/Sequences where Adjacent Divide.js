//Given two positive integer n and m. Find the number of arrays of size n that can be formed such that:

//Each element is in the range [1, m].
//All adjacent are such that one of them divide the another i.e element Ai divides Ai + 1 or Ai+1 divides Ai.
Examples:

Input: n = 3, m = 3
Output : 17
Explanation:// The possible arrays are [1, 1, 1], [1, 1, 2], [1, 1, 3], [1, 2, 1], [1, 2, 2], [1, 3, 1], [1, 3, 3], 
//[2, 1, 1], [2, 1, 2], [2, 1, 3], [2, 2, 1], [2, 2, 2], [3, 1, 1], [3, 1, 2], [3, 1, 3], [3, 3, 1] and [3, 3, 3].
Input: n = 1, m = 10 
Output: 10
Explanation: //The possible arrays are [1], [2], [3], [4], [5], [6], [7], [8], [9] and [10].

Constraints

//1 ≤ n ≤ 11
//1 ≤ m ≤ 11

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */

class Solution {
    count(n, m) {
        
        let dp = new Array(m + 1).fill(1);
        dp[0] = 0;

        for (let k = 1; k < n; k++) {
            let nextDp = new Array(m + 1).fill(0);

            for (let i = 1; i <= m; i++) {
                for (let j = 1; j <= m; j++) {
                    if (i % j === 0 || j % i === 0) {
                        nextDp[j] += dp[i];
                    }
                }
            }

            dp = nextDp;
        }

        let ans = 0;
        for (let i = 1; i <= m; i++) {
            ans += dp[i];
        }

        return ans;
    }
}
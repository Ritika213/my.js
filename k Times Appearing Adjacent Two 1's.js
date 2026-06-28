//Given two integers n and k, count the number of binary strings of length n where adjacent 1 appear k times.

//Since the answer can be huge, return it modulo 109+7.

Examples:

Input: n = 3, k = 2
Output: 1
Explanation:// Possible string is "111" where 2 adjacent 1 appear.
Input: n = 5, k = 2
Output: 6
Explanation: //Possible strings are "00111", "10111", "01110", "11100", "11101" and "11011".
Constraints
//1 ≤ n, k ≤ 103   code in js

/**
 * @param {number} n
 * @param {number} k
 * @returns {number}
 */
class Solution {
    countStrings(n, k) {
        const MOD = 1000000007;

        const dp = Array.from({ length: n + 1 }, () =>
            Array.from({ length: k + 1 }, () => [0, 0])
        );

        // Base case
        dp[1][0][0] = 1; // "0"
        dp[1][0][1] = 1; // "1"

        for (let len = 2; len <= n; len++) {
            for (let adj = 0; adj <= k; adj++) {

                // Append 0
                dp[len][adj][0] =
                    (dp[len - 1][adj][0] + dp[len - 1][adj][1]) % MOD;

                // Append 1 after 0
                dp[len][adj][1] =
                    (dp[len][adj][1] + dp[len - 1][adj][0]) % MOD;

                // Append 1 after 1 (creates one new adjacent pair)
                if (adj > 0) {
                    dp[len][adj][1] =
                        (dp[len][adj][1] + dp[len - 1][adj - 1][1]) % MOD;
                }
            }
        }

        return (dp[n][k][0] + dp[n][k][1]) % MOD;
    }
}
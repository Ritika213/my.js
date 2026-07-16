//Given two integers n and sum, determine the number of n-digit positive integers whose digits add up to sum.

//An n-digit number cannot have leading zeros; that is, the first digit must be between 1 and 9.
//If there exist no n digit number with sum of digits equal to given sum, return -1.
Examples :

Input: n = 2, sum = 2
Output: 2
Explaination: //The valid 2-digit numbers whose digits sum to 2 are 11 and 20.
Input: n = 1, sum = 10
Output: -1
Explaination: //A single-digit number can only have a digit sum between 0 and 9.
Input: n = 2, sum = 10
Output: 9
Explaination //The 2-digit numbers whose digits add up to 10 are: 19, 28, 37, 46, 55, 64, 73, 82, 91.
Constraints
//1 ≤ n ≤ 9
//1 ≤ sum ≤ 81

/**
 * @param {number} n
 * @param {number} sum
 * @return {number}
 */

class Solution {
    countWays(n, sum) {
        const mod = 1000000007;

        let dp = Array.from({ length: n + 1 }, () =>
            Array(sum + 1).fill(0)
        );

        dp[0][0] = 1;

        for (let d = 1; d <= 9 && d <= sum; d++) {
            dp[1][d] = 1;
        }

        for (let i = 2; i <= n; i++) {
            for (let j = 1; j <= sum; j++) {
                for (let d = 0; d <= 9; d++) {
                    if (j >= d) {
                        dp[i][j] = (dp[i][j] + dp[i - 1][j - d]) % mod;
                    }
                }
            }
        }

        return dp[n][sum] === 0 ? -1 : dp[n][sum];
    }
}
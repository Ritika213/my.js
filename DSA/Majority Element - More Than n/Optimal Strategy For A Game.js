//given an integer array arr[] of size n(even). The array elements represent n coins of values v1, v2, ....vn.
//You play against an opponent in an alternating way. In each turn, a player selects either the first or last coin from the row,
// removes it from the row permanently, and receives the coin's value.
//You need to determine the maximum possible amount of money you can win if you go first.
Note: //Both the players are playing optimally.

Examples:

Input: arr = [5, 3, 7, 10]
Output: 15
Explanation:// The user collects the maximum value as 15(10 + 5). It is guaranteed that we cannot get more than 15 by any possible moves.
Input: arr= [8, 15, 3, 7]
Output: 22
Explanation:// The user collects the maximum value as 22(7 + 15). It is guaranteed that we cannot get more than 22 by any possible moves.
Constraints:
2 <= n <= 103
1 <= arr[i] <= 106


class Solution{
    maximumAmount(arr) {
        
const n = arr.length;
        const dp = Array.from({ length: n }, () => Array(n).fill(0));
        for (let i = 0; i < n; i++) dp[i][i] = arr[i];
        for (let len = 2; len <= n; len++) {
            for (let i = 0; i + len - 1 < n; i++) {
                const j = i + len - 1;
                const left = arr[i] + Math.min(
                    (i + 2 <= j ? dp[i + 2][j] : 0),
                    (i + 1 <= j - 1 ? dp[i + 1][j - 1] : 0)
                );
                const right = arr[j] + Math.min(
                    (i <= j - 2 ? dp[i][j - 2] : 0),
                    (i + 1 <= j - 1 ? dp[i + 1][j - 1] : 0)
                );
                dp[i][j] = Math.max(left, right);
            }
        }
        return dp[0][n - 1];
    }
}

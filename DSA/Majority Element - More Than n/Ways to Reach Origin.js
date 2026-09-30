//Geek is standing at a point (x, y) on a 2D grid and wants to reach the origin (0, 0).

//From any point, Geek can move in only two directions: left, from (x, y) to (x - 1, y), or down, from (x, y) to (x, y - 1).

//Find the total number of distinct paths for Geek to reach (0, 0) from (x, y). Since the answer can be very large, 
// return it modulo 109+7.

Examples:

Input: x = 3, y = 0
Output: 1
Explanation:// The only possible path is (3, 0) -> (2, 0) -> (1, 0) -> (0, 0), since y = 0, there is no option to 
//move down at any step.
Input: x = 3, y = 6
Output: 84
Explanation:// There are a total of 84 distinct paths from (3, 6) to (0, 0) using only left and down moves.
Constraints

//0 ≤ x, y ≤ 500




//User function Template for javascript

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
class Solution {
  ways(x, y) {
    
     const MOD = 1000000007;
    let n = x + 1; // Adding 1 to include the point (0, 0)
    let m = y + 1; // Adding 1 to include the point (0, 0)
    
    let dp = new Array(n);
    for (let i = 0; i < n; i++) {
      dp[i] = new Array(m);
    }
    for (let i = 0; i < n; i++) {
      dp[i][0] = 1;
    }
    for (let i = 0; i < m; i++) {
      dp[0][i] = 1;
    }
    for (let i = 1; i < n; i++) {
      for (let j = 1; j < m; j++) {
        dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % MOD;
      }
    }
    return dp[n - 1][m - 1];
  }
}

//given a matrix mat[][] of size n x m, where each of its cells contains some coins. Count the number of ways to collect exactly k coins
//  while moving from the top left cell of the matrix to the bottom right cell.
//From a cell (i, j), you can only move to cell (i+1, j) or (i, j+1).

Note:// It is guaranteed that the answer will not exceed 32-bit integer limits.

Examples:

Input: k = 12, mat = [[1, 2, 3],
                      [4, 6, 5],
                      [3, 2, 1]]
Output: 2
Explanation:// There are 2 possible paths with exactly 12 coins, (1 + 2 + 6 + 2 + 1) and (1 + 2 + 3 + 5 + 1).
Input: k = 16, mat = [[1, 2, 3], 
                      [4, 6, 5], 
                      [9, 8, 7]]
Output: 0 
Explanation //There are no possible paths that lead to sum = 16.

Constraints
//1 ≤ k ≤ 100
//1 ≤ n, m ≤ 100
//0 ≤ mat[i][j] ≤ 200


class Solution {
    numberOfPath(mat, k) {
        
        const n = mat.length;
    const m = mat[0].length;

    // 3D DP array for memoization
    const dp = Array.from({ length: n }, () =>
      Array.from({ length: m }, () => Array(k + 1).fill(-1))
    );

    const countPaths = (i, j, sum) => {
      // Base case: out of bounds
      if (i >= n || j >= m) return 0;

      // Subtract current cell value
      sum -= mat[i][j];

      // If sum < 0, no valid path
      if (sum < 0) return 0;

      // If reached bottom-right
      if (i === n - 1 && j === m - 1) {
        return sum === 0 ? 1 : 0;
      }
       // Memoization check
      if (dp[i][j][sum] !== -1) return dp[i][j][sum];

      // Move right and down
      const right = countPaths(i, j + 1, sum);
      const down = countPaths(i + 1, j, sum);

      dp[i][j][sum] = right + down;
      return dp[i][j][sum];
    };

    return countPaths(0, 0, k);

    }
}

//Given a n x n matrix such that each of its cells contains some coins. Count the number of ways to collect exactly k coins while moving 
//from top left corner of the matrix to the bottom right. From a cell (i, j), you can only move to (i+1, j) or (i, j+1).

Input:
k = 12, n = 3
arr = [[1, 2, 3], 
       [4, 6, 5], 
       [3, 2, 1]]
Output: 
2
Explanation 
//There are 2 possible paths with exactly 12 coins, (1 + 2 + 6 + 2 + 1) and (1 + 2 + 3 + 5 + 1).

class Solution {
    /**
    * @param number k
    * @param number n
    * @param number[][] arr
    
    * @returns number
    */
        numberOfPath(n, k, arr) {
            
              let memo = new Array(n).fill(0).map(() => new Array(n).fill(0).map(() => new Array(k + 1).fill(undefined)));
    
        function dp(i, j, m) {
            if (i >= n || j >= n || m < 0) return 0;
            if (i === n - 1 && j === n - 1) {
                return (m === arr[i][j]) ? 1 : 0;
            }
    
            if (memo[i][j][m] !== undefined) {
                return memo[i][j][m];
            }
    
            let down = dp(i + 1, j, m - arr[i][j]);
            let right = dp(i, j + 1, m - arr[i][j]);
    
            memo[i][j][m] = down + right;
            return memo[i][j][m];
        }
    
        return dp(0, 0, k);
        }
    }
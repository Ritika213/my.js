//Given a matrix with n rows and m columns. Your task is to find the length of the longest path in with the 
// following constraints

//The values in path strictly increasing.  For example if a path of length k has values a1, a2, a3, .... ak  ,
//  then for every i from [2, k] this condition must hold ai > ai-1. 
//No cell should be revisited in the path.
//From each cell,  you can move in any of of the four directions: left, right, up, or down.
//You are not allowed to move diagonally or move outside the boundary.
Examples:

Input: n = 3, m = 3, matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Output: 5
Explanation// One such path is 1 -> 2 -> 3 -> 6 -> 9, where each number is strictly greater than the previous.
Input: n = 3, m = 3, matrix = [[3, 4, 5], [6, 2, 6], [2, 2, 1]]
Output: 4
Explanation: //One of the longest increasing paths is 3 -> 4 -> 5 -> 6.

Constraints

//1 ≤ n, m ≤ 1000
//0 ≤ matrix[i][j] ≤ 230


/**
 * @param {number[][]} matrix
 * @param {number} n
 * @param {number} m
 * @return {number}
 */

class Solution {
    longIncPath(matrix, n, m) {
        let memo = Array.from({ length: n }, () => Array(m).fill(0));

        let dirs = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1]
        ];

        function dfs(i, j) {
            if (memo[i][j] !== 0) return memo[i][j];

            let best = 1;

            for (let [di, dj] of dirs) {
                let ni = i + di;
                let nj = j + dj;

                if (
                    ni >= 0 && ni < n &&
                    nj >= 0 && nj < m &&
                    matrix[ni][nj] > matrix[i][j]
                ) {
                    best = Math.max(best, 1 + dfs(ni, nj));
                }
            }

            memo[i][j] = best;
            return best;
        }

        let ans = 0;

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                ans = Math.max(ans, dfs(i, j));
            }
        }

        return ans;
    }
}
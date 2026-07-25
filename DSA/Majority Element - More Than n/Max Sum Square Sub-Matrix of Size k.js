//Given a n × n grid mat of integers where values can be negative, find the maximum sum among all possible k × k sub-grids.

Examples:

//Input: k = 3, mat = [[1, 2, -1, 4], [-8, -3, 4, 2], [3, 8, 10, -8], [-4, -1, 1, 7]]
Output: 20
//Explanation: The 3 × 3 sub-grid [[-3, 4, 2], [8, 10, -8], [-1, 1, 7]] highlighted in red has the maximum sum of 20. 








Input: k = 1, mat = [[4]]
Output: 4
Explanation// Only one 1×1 sub-grid exists with sum 4.
Constraints

//1 ≤ n ≤ 1000
//1 ≤ k ≤ n
//-1000 ≤ mat[i][j] ≤ 1000

class Solution {
    maximumSum(mat, k) {
        let rows = mat.length;
        let cols = mat[0].length;

        // Row-wise prefix sum
        let row = Array.from({ length: rows }, () => Array(cols).fill(0));

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (j === 0)
                    row[i][j] = mat[i][j];
                else
                    row[i][j] = row[i][j - 1] + mat[i][j];
            }
        }

        let maxi = -Infinity;

        let sc = 0;
        while (sc <= cols - k) {
            let sr = 0;
            while (sr <= rows - k) {
                let sum = 0;

                for (let i = sr; i < sr + k; i++) {
                    if (sc === 0)
                        sum += row[i][sc + k - 1];
                    else
                        sum += row[i][sc + k - 1] - row[i][sc - 1];
                }

                maxi = Math.max(maxi, sum);
                sr++;
            }
            sc++;
        }

        return maxi;
    }
}
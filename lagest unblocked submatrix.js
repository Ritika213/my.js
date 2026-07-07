//Given two integers n and m, and an array arr[][] of size k, where arr[i] = [r, c] represents a blocked cell
//  (1-based indexing) in an n × m grid. Each blocked cell blocks its entire row and column. Find the largest
//  continuous unblocked area in the grid.

Note:// No two blocked cells are in the same row or the same column.

Examples:

Input: n = 5, m = 5, arr = [[2, 3], [5, 1]]
Output: 4
Explanation

//- Blocked cells (2, 3) and (5, 1) block rows 2, 5 and columns 1, 3.
//- The longest unblocked row segment has length 2 (rows 3–4).
//- The longest unblocked column segment has length 2 (columns 4–5).
//- Therefore, the largest unblocked rectangle has area 2 × 2 = 4.
Input: n = 2, m = 2, arr = [[2, 2]]
Output: 1
Explanation:// Since only (1,1) cell is free from the enemy hence answer is 1.
Constraints
//1 ≤ n, m ≤ 104
//0 ≤ k ≤ min(n, m)
//1 ≤ r ≤ n
//1 ≤ c ≤ m

/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} arr
 * @returns {number}
 */

class Solution {
    largestArea(n, m, arr) {
        let rows = [];
        let cols = [];
        let k= arr.length;

        rows.push(0);
        cols.push(0);

        for (let i = 0; i < k; i++) {
            rows.push(arr[i][0]);
            cols.push(arr[i][1]);
        }

        rows.push(n + 1);
        cols.push(m + 1);

        rows.sort((a, b) => a - b);
        cols.sort((a, b) => a - b);

        let maxRows = 0;
        let maxCols = 0;

        for (let i = 1; i < rows.length; i++) {
            let freeRows = rows[i] - rows[i - 1] - 1;
            maxRows = Math.max(maxRows, freeRows);
        }

        for (let i = 1; i < cols.length; i++) {
            let freeCols = cols[i] - cols[i - 1] - 1;
            maxCols = Math.max(maxCols, freeCols);
        }

        return maxRows * maxCols;
    }
}
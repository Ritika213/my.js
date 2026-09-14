//Given a 2D matrix mat[][] of size n × m, where each cell is either 0 (landmine) or 1 (safe), find the minimum
//  number of steps required to travel from any cell in the leftmost column to any cell in the rightmost column.

//You can move only in four directions: up, down, left, and right.
//A cell is unsafe if it contains a landmine or is directly adjacent (up, down, left, or right) to a landmine,
//  and such cells must be avoided.
//Return -1 if no safe path exists.
Examples:

Input: mat = [[1, 0, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 0, 1], [1, 1, 1, 1, 0]]

Output: 6
Explanation:// We can see that length of shortest safe route is 6. 

Input: mat = [[1, 1, 1, 1, 1], [1, 1, 0, 1, 1], [1, 1, 1, 1, 1]]

Output: -1
Explanation:// There is no possible path from first column to last column.
Constraints

//1 ≤ n, m ≤ 103
//0 ≤ mat[i][j] ≤ 1


/**
 * @param {number[][]} mat
 * @return {number}
 */
class Solution {
    shortestPath(mat) {
        let n = mat.length;
        let m = mat[0].length;

        let unsafe = Array.from({ length: n }, () => Array(m).fill(0));

        let dr = [-1, 1, 0, 0];
        let dc = [0, 0, -1, 1];

        // Mark cells which are unsafe
        for (let r = 0; r < n; r++) {
            for (let c = 0; c < m; c++) {
                if (mat[r][c] === 0) {
                    unsafe[r][c] = 1;

                    for (let d = 0; d < 4; d++) {
                        let nr = r + dr[d];
                        let nc = c + dc[d];

                        if (
                            nr >= 0 && nr < n &&
                            nc >= 0 && nc < m
                        ) {
                            unsafe[nr][nc] = 1;
                        }
                    }
                }
            }
        }

        let visited = Array.from(
            { length: n },
            () => Array(m).fill(0)
        );

        // JS queue
        let q = [];
        let front = 0;

        // Start from all safe cells in first column
        for (let r = 0; r < n; r++) {
            if (mat[r][0] === 1 && !unsafe[r][0]) {
                q.push([r, 0, 1]);
                visited[r][0] = 1;
            }
        }

        while (front < q.length) {
            let [r, c, dist] = q[front++];

            if (c === m - 1) {
                return dist;
            }

            for (let d = 0; d < 4; d++) {
                let nr = r + dr[d];
                let nc = c + dc[d];

                if (
                    nr >= 0 && nr < n &&
                    nc >= 0 && nc < m &&
                    mat[nr][nc] === 1 &&
                    !unsafe[nr][nc] &&
                    !visited[nr][nc]
                ) {
                    visited[nr][nc] = 1;
                    q.push([nr, nc, dist + 1]);
                }
            }
        }

        return -1;
    }
}

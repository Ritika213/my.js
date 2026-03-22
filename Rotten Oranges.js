//Given a matrix mat[][], where each cell in the matrix can have values 0, 1 or 2 which has the following meaning:
//0 : Empty cell
//1 : Cell have fresh oranges
//2 : Cell have rotten oranges

//task is to determine the minimum time required so that all the oranges become rotten. A rotten orange at index (i, j) can rot 
// other fresh orange at indexes (i-1, j), (i+1, j), (i, j-1), (i, j+1) (up, down, left and right) in a unit time.

Note:// If it is impossible to rot every orange then simply return -1.

Examples:

Input:// mat[][] = [[2, 1, 0, 2, 1], [1, 0, 1, 2, 1], [1, 0, 0, 2, 1]]
Output: 2
//Explanation: 

//Oranges at positions (0,0), (0,3), (1,3), and (2,3) will rot adjacent fresh oranges in successive time frames.
//All fresh oranges become rotten after 2 units of time.
Input:// mat[][] = [[2, 1, 0, 2, 1], [0, 0, 1, 2, 1], [1, 0, 0, 2, 1]]
Output: -1
Explanation:// Oranges at positions (0,0), (0,3), (1,3), and (2,3) rot some fresh oranges,
//but the fresh orange at (2,0) can never be reached, so not all oranges can rot.
Constraints
//1 ≤ mat.size() ≤ 500
//1 ≤ mat[0].size() ≤ 500
//mat[i][j] = {0, 1, 2} 

/**
 * @param {number[][]} mat
 * @returns {number}
 */
class Solution {
    orangesRot(mat) {
        if (mat.length === 0) return 0;

        let n = mat.length;
        let m = mat[0].length;
        let q = [];
        let freshCount = 0;

        // Step 1: count fresh & add rotten
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (mat[i][j] === 2) {
                    q.push([i, j]);
                } else if (mat[i][j] === 1) {
                    freshCount++;
                }
            }
        }

        if (freshCount === 0) return 0;

        let minutes = 0;
        let dirs = [[-1,0],[1,0],[0,-1],[0,1]];

        // BFS
        while (q.length > 0 && freshCount > 0) {
            let size = q.length;

            for (let i = 0; i < size; i++) {
                let [r, c] = q.shift();

                for (let [dr, dc] of dirs) {
                    let nr = r + dr;
                    let nc = c + dc;

                    if (
                        nr >= 0 && nr < n &&
                        nc >= 0 && nc < m &&
                        mat[nr][nc] === 1
                    ) {
                        mat[nr][nc] = 2;
                        q.push([nr, nc]);
                        freshCount--;
                    }
                }
            }
            minutes++;
        }

        return freshCount === 0 ? minutes : -1;
    }
}


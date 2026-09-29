//Given a square chessboard of size n × n, the initial position knightPos and target position targetPos of
//  a Knight are given. Find the minimum number of moves required for the Knight to reach targetPos.

//A Knight moves in an L-shape, covering 2 cells in one direction and 1 cell perpendicular to it. From (x, y),
//  it can move to: (x ± 2, y ± 1) and (x ± 1, y ± 2)

//This gives at most 8 possible moves:


Note //The positions are given using 1-based indexing.

//Examples:

Examples:

Input: n = 3, knightPos = [3, 3], targetPos= [1, 2]
Output: 1
Explanation:// Knight takes 1 step to reach from (3, 3) to (1 ,2).
Input: n = 6, knightPos = [1, 3], targetPos = [5, 1]
Output: 2
Explanation //In above diagram Knight takes 2 step to reach from (1, 3) to (5, 0): (1, 3) -> (3, 2) -> (5, 1) 
Constraints

//n ≤ 1000
//2 ≤ knightPos.size(), targetPos.size() ≤ 2
//1 ≤ knightPos[i], targetPos[i] ≤ n 


/**
 * @param {number[]} knightPos
 * @param {number[]} targetPos
 * @param {number} n
 * @returns {number}
 */

class Solution {
    minStepToReachTarget(knightPos, targetPos, n) {
        let sx = knightPos[0] - 1;
        let sy = knightPos[1] - 1;
        let tx = targetPos[0] - 1;
        let ty = targetPos[1] - 1;

        if (sx === tx && sy === ty) return 0;

        let vis = Array.from({ length: n }, () => Array(n).fill(false));

        let q = [];
        q.push([sx, sy, 0]);

        vis[sx][sy] = true;

        let dx = [-2, -2, -1, -1, 1, 1, 2, 2];
        let dy = [-1, 1, -2, 2, -2, 2, -1, 1];

        let front = 0;

        while (front < q.length) {
            let [x, y, steps] = q[front++];

            for (let i = 0; i < 8; i++) {
                let nx = x + dx[i];
                let ny = y + dy[i];

                if (
                    nx >= 0 &&
                    nx < n &&
                    ny >= 0 &&
                    ny < n &&
                    !vis[nx][ny]
                ) {
                    if (nx === tx && ny === ty) {
                        return steps + 1;
                    }

                    vis[nx][ny] = true;
                    q.push([nx, ny, steps + 1]);
                }
            }
        }

        return -1;
    }
}
 
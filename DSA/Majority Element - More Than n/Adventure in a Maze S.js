//Given a maze represented as an n x n grid, grid[][], using 0-based indexing. Each cell contains one of the values
//  1, 2, or 3, which determines the direction(s) you are allowed to move from that cell:

//1 - you may move Right only.
//2 - you may move Down only.
//3 - you may move Right or Down (both directions are available).
//You start at the top-left cell (0, 0) (the Entry) and must reach the bottom-right cell (n-1, n-1) (the Exit),
//  following the movement rule of each cell you pass through. You are never allowed to move outside the
//  boundaries of the grid.

//The Adventure of a path is the sum of the values of all cells visited along that path (including both the entry
//  and exit cells).

//Find the total number of distinct valid paths from Entry to Exit, and among all such paths, the maximum possible
//  Adventure. Return the answer as [totalPaths, maxAdventure].

Note //Return totalPaths modulo 109 + 7, maxAdventure needs no modulo, as it stays small regardless of grid size.

Examples:

Input: grid = [[3, 2], [1, 3]]
Output: [2, 8]
Explanation:
//There are 2 valid paths from [0, 0] to [1, 1]:
//Path 1: [0, 0] -> [0, 1] -> [1, 1], values 3 + 2 + 3 = 8
//Path 2: [0,0] -> [1, 0] -> [1, 1], values 3 + 1 + 3 = 7
//The maximum Adventure among these is 8, so the output is [2, 8].
Input: grid = [[1, 1, 3, 2, 1], [3, 2, 2, 1, 2], [1, 3, 3, 1, 3], [1, 2, 3, 1, 2], [1, 1, 1, 3, 1]]
Output: [4, 18]
Explanation: //There are 4 valid paths from Entry to Exit, with total Adventures 
//18, 17, 17, and 16 respectively. The maximum among these is 18, so the output is [4, 18].
Constraints
//1 ≤ n ≤ 100


/**
 * @param {number[][]} grid
 * @return {number[]}
 */

class Solution {
    findWays(grid) {
        let n = grid.length;
        const MOD = 1000000007;

        let ways = new Array(n).fill(0);
        let best = new Array(n).fill(-1);

        ways[0] = 1;
        best[0] = grid[0][0];

        for (let i = 0; i < n; ++i) {
            for (let j = 0; j < n; ++j) {

                if (i === 0 && j === 0) {
                    continue;
                }

                let currentWays = 0;
                let currentBest = -1;

                if (
                    j > 0 &&
                    (grid[i][j - 1] === 1 || grid[i][j - 1] === 3) &&
                    best[j - 1] !== -1
                ) {
                    currentWays =
                        (currentWays + ways[j - 1]) % MOD;

                    currentBest = Math.max(
                        currentBest,
                        best[j - 1] + grid[i][j]
                    );
                }

                if (
                    i > 0 &&
                    (grid[i - 1][j] === 2 || grid[i - 1][j] === 3) &&
                    best[j] !== -1
                ) {
                    currentWays =
                        (currentWays + ways[j]) % MOD;

                    currentBest = Math.max(
                        currentBest,
                        best[j] + grid[i][j]
                    );
                }

                ways[j] = currentWays;
                best[j] = currentBest;
            }
        }

        if (best[n - 1] === -1) {
            return [0, 0];
        }

        return [ways[n - 1], best[n - 1]];
    }
}
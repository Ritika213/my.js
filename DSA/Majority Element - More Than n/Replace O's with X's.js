//given a grid[][] of size n*m, where every element is either 'O' or 'X'. You have to replace all 'O' or a group of 'O' with 'X' that
// are surrounded by 'X'.

//A 'O' (or a set of 'O') is considered to be surrounded by 'X' if there are 'X' at locations just below, just above, just left and just
//  right of it.

Examples:

Input: 
grid = [['X', 'X', 'X', 'X'], 
          ['X', 'O', 'X', 'X'], 
          ['X', 'O', 'O', 'X'], 
          ['X', 'O', 'X', 'X'], 
          ['X', 'X', 'O', 'O']]
Output: 
[['X', 'X', 'X', 'X'], 
['X', 'X', 'X', 'X'], 
['X', 'X', 'X', 'X'], 
['X', 'X', 'X', 'X'], 
['X', 'X', 'O', 'O']]
Explanation// We only changed those 'O' that are surrounded by 'X'


Input: 
grid = [['X', 'O', 'X', 'X'], 
          ['X', 'O', 'X', 'X'], 
          ['X', 'O', 'O', 'X'], 
          ['X', 'O', 'X', 'X'], 
          ['X', 'X', 'O', 'O']]
Output: 
[['X', 'O', 'X', 'X'], 
['X', 'O', 'X', 'X'], 
['X', 'O', 'O', 'X'], 
['X', 'O', 'X', 'X'], 
['X', 'X', 'O', 'O']]
Explanation: //There's no 'O' that's surround by 'X'.
Input: 
grid = [['X', 'X', 'X'], 
          ['X', 'O', 'X'], 
          ['X', 'X', 'X']]
Output: 
[['X', 'X', 'X'], 
['X', 'X', 'X'], 
['X', 'X', 'X']]
Explanation //There's only one 'O' that's surround by 'X'.

Constraints
//1 ≤ grid.size() ≤ 100
//1 ≤ grid[0].size() ≤ 100


/**
 * @param {character[][]} grid
 * @returns {void}
 */

class Solution {
  fill(grid) {
    const n = grid.length;
    const m = grid[0].length;
    const q = [];

    // Add border 'O's to queue
    for (let i = 0; i < n; i++) {
      if (grid[i][0] === 'O') q.push([i, 0]);
      if (grid[i][m - 1] === 'O') q.push([i, m - 1]);
    }

    for (let j = 0; j < m; j++) {
      if (grid[0][j] === 'O') q.push([0, j]);
      if (grid[n - 1][j] === 'O') q.push([n - 1, j]);
    }

    // BFS
    while (q.length > 0) {
      const [x, y] = q.shift();
      if (x < 0 || y < 0 || x >= n || y >= m || grid[x][y] !== 'O') continue;
      grid[x][y] = '#';
      q.push([x + 1, y]);
      q.push([x - 1, y]);
      q.push([x, y + 1]);
      q.push([x, y - 1]);
    }

    // Convert remaining 'O's to 'X' and '#' back to 'O'
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (grid[i][j] === 'O') grid[i][j] = 'X';
        else if (grid[i][j] === '#') grid[i][j] = 'O';
      }
    }
  }
}


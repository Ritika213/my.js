//Given an n x m binary matrix mat[][] containing only 0s and 1s, determine if there exists a rectangle within the matrix such that all 
//four corners of the rectangle are 1. If such a rectangle exists, return true; otherwise, return false.

Example:

Input: mat =
[[1, 0, 0, 1, 0],
[0, 0, 1, 0, 1],
[0, 0, 0, 1, 0], 
[1, 0, 1, 0, 1]] 
Output: true
Explanation:// Valid corners are at index (1,2), (1,4), (3,2), (3,4) 
Input: mat =
[[0, 0, 0],
[0, 0, 0],
[0, 0, 0]]
Output: false
Explanation// There are no valid corners.
Constraints:
1 <= n, m <= 200
0 <= mat[i] <= 1

class Solution {
    ValidCorner(mat) {
        
         let values = new Map();
    for (let i = 0; i < mat.length; i++) {
      let jpossible = [];
      for (let j = 0; j < mat[0].length; j++) {
        if (mat[i][j] == 1) {
          jpossible.push(j);
        }
      }
      if (jpossible.length > 1) values.set(i, jpossible);
    }
    for (let [key1, list] of values) {
      for (let [key2, list2] of values) {
        if (key1 != key2) {
          let count = 0;
          for (let val of list) {
            if (list2.includes(val)) count++;
            if (count >= 2) return true;
          }
        }
      }
    }
    return false;
    }
}
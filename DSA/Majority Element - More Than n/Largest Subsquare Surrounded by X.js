//Given a square matrix mat[][] of size n × n, where each cell contains either 'X' or 'O'. Find the size of
//  the largest square submatrix whose boundary is completely surrounded by 'X'. The cells inside the submatrix
//  can contain either 'X' or 'O'. Only the four sides of the submatrix must contain 'X'.

//Return side length of the largest such square submatrix.


Note: //A square of size 1 is valid if its only cell is 'X'. If no such square submatrix exists, return 0.

Examples:

Input: mat = [[X,X,X,O],[X,O,X,X],[X,X,X,O],[X,O,X,X]]
Output: 3
Explanation:// Here, the input represents following matrix of size 4 x 4
 
//The square submatrix starting at (0,0) and ending at (2,2) is the largest submatrix surrounded by X. 
// Therefore, size of that matrix would be 3.
Input: mat = [[X,X],[X,X]]
 
Output: 2
Explanation// The largest square submatrix surrounded by X is the whole input matrix.

Constraints

//1 ≤ n, mat.size(), mat[i].size() ≤ 1000


/**
 * @param {string[][]} mat
 * @return {number}
 */

class Solution {
    largestSubsquare(mat) {
        let n = mat.length;
        if (n === 0) return 0;

        let hor = Array.from({ length: n }, () => Array(n).fill(0));
        let ver = Array.from({ length: n }, () => Array(n).fill(0));

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (mat[i][j] === 'X') {
                    hor[i][j] = (j === 0) ? 1 : hor[i][j - 1] + 1;
                    ver[i][j] = (i === 0) ? 1 : ver[i - 1][j] + 1;
                }
            }
        }

        let ans = 0;

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (mat[i][j] === 'X') {

                    let maxSide = Math.min(hor[i][j], ver[i][j]);

                    for (let s = maxSide; s > ans; s--) {
                        if (
                            hor[i - s + 1][j] >= s &&
                            ver[i][j - s + 1] >= s
                        ) {
                            ans = s;
                            break;
                        }
                    }
                }
            }
        }

        return ans;
    }
}


 
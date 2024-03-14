//Given a square matrix a of size n x n, where each cell can be either 'X' or 'O', you need to find the size of the largest square subgrid
// that is completely surrounded by 'X'. More formally you need to find the largest square within the grid where all its border cells are 'X'.

//Example 1:

Input:
n = 2
a = [[X,X],
     [X,X]]
Output:
2
Explanation//The largest square submatrix surrounded by X is the whole input matrix.

class Solution {
    /**
    * @param number n
    * @param string[][] a
    
    * @returns number
    */
        largestSubsquare(n, a) {
            
             let ver = new Array(n).fill(null).map(() => new Array(n).fill(0));
            let hor = new Array(n).fill(null).map(() => new Array(n).fill(0));
            let side = 0;
    
            // Calculate vertical and horizontal lengths
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n; j++) {
                    if (a[i][j] === 'X') {
                        ver[i][j] = (i === 0) ? 1 : ver[i - 1][j] + 1;
                        hor[i][j] = (j === 0) ? 1 : hor[i][j - 1] + 1;
                    }
                }
            }
            // Calculate the largest subsquare
            for (let i = n - 1; i >= 0; i--) {
                for (let j = n - 1; j >= 0; j--) {
                    let val = Math.min(ver[i][j], hor[i][j]);
                    while (val > side) {
                        if (ver[i][j - val + 1] >= val && hor[i - val + 1][j] >= val) {
                            side = val;
                        }
                        val--;
                    }
                }
            }
    
            return side;
        
    
        }
    }
            
    
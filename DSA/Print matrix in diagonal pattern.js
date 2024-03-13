//Given a square matrix mat[][] of n*n size, the task is to determine the diagonal pattern which is a linear arrangement of the 
//elements of the matrix as depicted in the following example:

Input:
n = 3
mat = //{{1, 2, 3},
          // {4, 5, 6},
          // {7, 8, 9}}
Output //{1, 2, 4, 7, 5, 3, 6, 8, 9}
Explaination
//Starting from (0, 0): 1,
//Move to the right to (0, 1): 2,
//Move diagonally down to (1, 0): 4,
//Move diagonally down to (2, 0): 7,
//Move diagonally up to (1, 1): 5,
//Move diagonally up to (1, 2): 3,
//Move to the right to (2, 1): 6,
//Move diagonally up to (0, 2): 8,
//Move diagonally up to (2, 2): 9
//There for the output is {1, 2, 4, 7, 5, 3, 6, 8, 9}.


function matrixDiagonally(n, mat) {
    let res = new Array(n * n).fill(0);
    
    let row = 0, col = 0;
    for (let i = 0; i < n * n; i++) {
        res[i] = mat[row][col];
        
        // If sum of row and col is even, move up-right
        if ((row + col) % 2 == 0) {
            if (col == n - 1) { // if at the last column, move down
                row++;
            } else if (row == 0) { // if at the first row, move right
                col++;
            } else { // move diagonally up-right
                row--;
                col++;
            }
        }
        // If sum of row and col is odd, move down-left
        else {
            if (row == n - 1) { // if at the last row, move right
                col++;
            } else if (col == 0) { // if at the first column, move down
                row++;
            } else { // move diagonally down-left
                row++;
                col--;
            }
        }
    }
    
    return res;
}


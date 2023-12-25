//Given a square matrix of size n*n. The task is to find the determinant of this matrix.


Input:
n = 4
matrix = //{{1, 0, 2, -1},
             // {3, 0, 0, 5},
             // {2, 1, 4, -3},
             // {1, 0, 5, 0}}
Output// 30
Explanation//Determinant of the given matrix is 30.
//Example 2:

Input:
n = 3
matrix = //{{1, 2, 3},
             // {4, 5, 6},
             // {7, 10, 9}}
Output// 12
Explanation:
//Determinant of the given matrix is 12.
 Task//You don't need to read input or print anything. Complete the function determinantOfMatrix() that takes matrix and its size n 
//as input parameters and returns the determinant of the matrix.

//Expected Time Complexity: O(N4)
//Expected Auxiliary Space: O(N2)


class Solution 
{
    //Function for finding determinant of matrix.
    determinantOfMatrix(matrix, n)
    {
        // code here
        if (n === 1) {
        return matrix[0][0];
    }

    let det = 0;

    // Iterate through the first row to expand the matrix
    for (let i = 0; i < n; i++) {
        // Calculate the submatrix by excluding the current row and column
        let submatrix = new Array(n - 1).fill(0).map(() => new Array(n - 1).fill(0));
        for (let j = 1; j < n; j++) {
            for (let k = 0, l = 0; k < n; k++) {
                if (k !== i) {
                    submatrix[j - 1][l] = matrix[j][k];
                    l++;
                }
            }
        }

        // Recursive call to find the determinant of the submatrix
        det += Math.pow(-1, i) * matrix[0][i] * this.determinantOfMatrix(submatrix, n - 1);
    }
return det;
    }
}
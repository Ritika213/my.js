//You are given an integer k and matrix mat. Rotate the elements of the given matrix to the left k times and return the resulting matrix.

Examples:

Input: k=1, mat=[[1,2,3],[4,5,6],[7,8,9]]
Output:
//2 3 1
//5 6 4
//8 9 7
Explanation //Rotate the matrix by one
//1 2 3       2 3 1
//4 5 6  =>  5 6 4
//7 8 9       8 9 7

Input: k=2, mat=[[1,2,3],[4,5,6],[7,8,9]]
Output:
//3 1 2
//6 4 5
//9 7 8
Explanation: //After rotating the matrix looks like
//1 2 3       2 3 1       3 1 2
//4 5 6  =>  5 6 4  =>   6 4 5
//7 8 9       8 9 7       9 7 8
//Expected Time Complexity: O(n*m)
//Expected Auxillary Space: O(n*m)

Constraints:
1<= mat.size, mat[0].size, mat[i][j] <=1000
1<=k<=10000



class Solution {
    /**
    * @param number n
    * @param number m
    * @param number k
    * @param number[][] mat

    * @returns number[][]
    */
    rotateMatrix(k, mat) {
        
         let r = mat.length;         // number of rows
        let c = mat[0].length;      // number of columns
        k = k % c;                  // reduce k to effective rotations within the column range

        // Initialize the new matrix with the same dimensions
        let arr = new Array(r);
        for (let i = 0; i < r; i++) {
            arr[i] = new Array(c);
        }

        // Perform the rotation to the left
        for (let i = 0; i < r; i++) {
            for (let j = 0; j < c; j++) {
                // Shift elements by k positions to the left
                arr[i][(j - k + c) % c] = mat[i][j];
            }
        }

        return arr;
    }
}

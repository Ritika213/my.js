//given a square matrix of size n x n. Your task is to find the transpose of the given matrix.
//The transpose of a matrix is obtained by converting all the rows to columns and all the columns to rows.

Examples :

Input: mat = [[1, 1, 1, 1],
                [2, 2, 2, 2],
                [3, 3, 3, 3],
                [4, 4, 4, 4]]
Output: [[1, 2, 3, 4],
       [1, 2, 3, 4],
       [1, 2, 3, 4],
       [1, 2, 3, 4]]
Explanation// Converting rows into columns and columns into rows.

Input: mat =  [[1, 2],
                 [9, -2]]
Output: [[1, 9],
        [2, -2]]
Explanation:// Converting rows into columns and columns into rows.
Constraints
//1 ≤ n ≤ 103
//-109 ≤ mat[i][j] ≤109

class Solution{
    //Function to find transpose of a matrix.
    transpose(matrix, n){
        
   let list = new Array();
        
        for(let i = 0; i < matrix.length; i++){
            let temp = new Array();
            for(let j = 0; j < matrix[0].length; j++){
                temp.push(matrix[j][i]);
            }
            list.push(temp);
        }
        
        return list;

    }
}
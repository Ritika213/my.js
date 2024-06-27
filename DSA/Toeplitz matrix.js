//A Toeplitz (or diagonal-constant) matrix is a matrix in which each descending diagonal from left to right is constant, i.e., 
//all elements in a diagonal are the same. Given a rectangular matrix mat, your task is to complete the function isToeplitz which returns 
//true if the matrix is Toeplitz otherwise, it returns false.

Examples:

Input:
mat = [[6, 7, 8],
       [4, 6, 7],
       [1, 4, 6]]
Output: true
Explanation:// The test case represents a 3x3 matrix
 //6 7 8 
 //4 6 7 
 //1 4 6
Output//true, as values in all downward diagonals from left to right contain the same elements.

Input: 
mat = [[1,2,3],
       [4,5,6]]
Output: false
Explanation: //Matrix of order 2x3 will be 1 2 3 4 5 6 Output: false as values in all diagonals are not the same.

Constraints:
1<=mat.size,mat[0].size<=40
1<=mat[i][j]<=100

//Expected time complexity: O(n*m)
//Expected space complexity: O(1)


class Solution {
    isToepliz(mat) {
        
       for(let a=1;a<mat.length;a++){
           for(let b=1;b<mat[0].length;b++){
               if(mat[a][b] !== mat[a-1][b-1]) return false;
           }
       }
       return true;
    }
}

//Given a strictly sorted 2D matrix mat[][] of size n x m and a number x. Find whether the number x is present in the matrix or not.
Note:// In a strictly sorted matrix, each row is sorted in strictly increasing order, and the first element of the ith row (i!=0) 
//is greater than the last element of the (i-1)th row.

Examples:

Input: mat = [[1, 5, 9], [14, 20, 21], [30, 34, 43]], x = 14
Output: true
Explanation:// 14 is present in the matrix, so output is true.
Input: mat = [[1, 5, 9, 11], [14, 20, 21, 26], [30, 34, 43, 50]], x = 42
Output: false
Explanation:// 42 is not present in the matrix.
Input: mat = [[87, 96, 99], [101, 103, 111]], x = 101
Output: true
Explanation// 101 is present in the matrix.

Constraints:
1 <= n, m <= 1000
1 <= mat[i][j] <= 109
1 <= x <= 109

class Solution {
    // Function to search a given number in row-column sorted matrix.
    searchMatrix(mat, x) {
        
        let m = mat.length;  // number of rows
        let n = mat[0].length;  // number of columns
        // start from top-right corner
        let i =0;  // rows index
        let j = n-1; // columns index
        while(i<m && j>=0){
            if(mat[i][j]===x){
                return true;  // found the element
            } else if(mat[i][j]>x){
                j--; // move left if the current element is larger
            } else {
                i++; // move down if the current element is smaller
            }
        }
        return false;  // element not found
    }
}
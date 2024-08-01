//You are given a rectangular matrix, and your task is to return an array while traversing the matrix in spiral form.

Examples:

Input:// matrix[][] = [[1, 2, 3, 4],
                  [5, 6, 7, 8],
                  [9, 10, 11, 12],
                 // [13, 14, 15,16]]
Output//: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]

Input: //matrix[][] = [[1, 2, 3, 4],
                  [5, 6, 7, 8],
                 // [9, 10, 11, 12]]
Output//: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
Explanation:// Applying same technique as shown above, output for the 2nd testcase will be 1 2 3 4 8 12 11 10 9 5 6 7.
//Expected Time Complexity: O(n2)
//Expected Auxiliary Space: O(n2)

Constraints
//1 <= matrix.size(), matrix[0].size() <= 100
//0 <= matrix[i][j]<= 100

class Solution {
    // Function to return a list of integers denoting spiral traversal of matrix.
    spirallyTraverse(matrix) {
        
         let n = matrix.length;
        let m = matrix[0].length;
        let ans =[];
        let left = 0,right = m-1,top = 0,bottom = n-1;
        while(top<=bottom && left<=right){
            for(let i = left;i<=right;i++){
                ans.push(matrix[top][i]);
            }
            top++;
            for(let i = top;i<=bottom;i++){
                ans.push(matrix[i][right]);
            }
            right--;
            if(top<=bottom){
                for(let i =right;i>=left;i--){
                    ans.push(matrix[bottom][i]);
                }
                bottom--;
            }
            if(left<=right){
                for(let i = bottom;i>=top;i--){
                    ans.push(matrix[i][left]);
                }
                left++;
            }
        }
        return ans;
    }
}



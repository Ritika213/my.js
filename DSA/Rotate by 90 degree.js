//Given a square mat[][]. The task is to rotate it by 90 degrees in clockwise direction without using any extra space.

Examples:

Input:// mat = [[1 2 3], [4 5 6], [7 8 9]]
Output:
//7 4 1 
//8 5 2
//9 6 3
//Input: mat = [1 2], [3 4]
//Output:
//3 1 
//4 2
//Input: mat[][] = [[1]]
//Output:
1
Constraints
//1 ≤ mat.size() ≤ 1000
//1 <= mat[][] <= 100

class Solution {
    rotate(mat) {
        
         let rows = mat.length;
       let cols = mat[0].length;
         for(let i=0; i<rows; i++){
           for(let j=i; j<cols; j++){
               let temp = mat[i][j];
               mat[i][j] = mat[j][i];
               mat[j][i] = temp;
           }
       }
       
    //   Reverse -->
      for(let i=0; i<rows; i++){
          for(let j=0; j<cols/2; j++){
              let temp = mat[i][j];
              mat[i][j] = mat[i][cols-j-1];
              mat[i][cols-j-1] = temp;
               
          }
      }
    }
}
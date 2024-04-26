//Given a matrix of size n x m with 0’s and 1’s, you enter the matrix at cell (0,0) in left to right direction. Whenever you encounter 
//a 0 you retain it in the same direction, else if you encounter a 1 you have to change the direction to the right of the current direction 
//and change that 1 value to 0, you have to find out from which index you will leave the matrix at the end.

//Example 1:

Input: 
n = 3, m = 3
matrix =// {{0, 1, 0},
         // {0, 1, 1}, 
         // {0, 0, 0}}
Output 
{1, 0}

Explanation: 
//Enter the matrix at (0, 0) 
//-> then move towards (0, 1) ->  1 is encountered 
//-> turn right towards (1, 1)  -> again 1 is encountered 
//-> turn right again towards (1, 0) 
//-> now, the boundary of matrix will be crossed ->hence, exit point reached at 1, 0..
//Example 2:

Input: 
n = 1, m = 2
matrix = //{{0, 0}}
Output 
{0, 1}
Explanation 
//Enter the matrix at cell (0, 0).
//Since the cell contains a 0, we continue moving in the same direction.
//We reach cell (0, 1), which also contains a 0. So, we continue moving in the same direction, we exit the matrix from cell (0, 1).
 Task:
// don't need to read or print anything. Your task is to complete the function FindExitPoint() which takes the matrix as an 
//input parameter and returns a list containing the exit point.

//Expected Time Complexity: O(n * m) where n = number of rows and m = number of columns.
//Expected Space Complexity: O(1)

Constraints:
1 <= n, m <= 100



class Solution {
    FindExitPoint(n, m, matrix) {
       
      let i = 0,  j = 0, dir = 0;
       
       while(i < n && j < m && i >= 0 && j >= 0) {
           if(matrix[i][j] == 1) {
               matrix[i][j] = 0;
               dir++;
           }
           
           dir %= 4;
           switch(dir) {
               case 0: j++; 
                       break;
               
               case 1: i++;
                       break;
               
               case 2: j--;
                       break;
               
               case 3: i--;
                       break;
           }
       }
        switch(dir) {
           case 1: return [i - 1, j];
           case 2: return [i, j + 1];
           case 3: return [i + 1, j];
       }
       
       return [i, j - 1];
   }
};
//Given a boolean matrix of size RxC where each cell contains either 0 or 1, modify it such that if a matrix cell matrix[i][j] is 1 then all 
//the cells in its ith row and jth column will become 1.

Input:
matrix= //{{1, 0},
             // {0, 0}}
Output 
//1 1
//1 0 
Explanation//Only cell that has 1 is at (0,0) so all cells in row 0 are modified to 1 and all cells in column 0 are modified to 

class Solution 
{
    //Function to modify the matrix such that if a matrix cell matrix[i][j]
    //is 1 then all the cells in its ith row and jth column will become 1.
    booleanMatrix(matrix)
    {
        
        let row=new Map();
         let col=new Map();
        let n=matrix.length, m=matrix[0].length;
        for(let i=0;i<n;i++){
            for(let j=0;j<m;j++){
                if(matrix[i][j]==1){
                    row[i]=1;
                    col[j]=1;
                }
            }
        }
        for(let i=0;i<n;i++){
            for(let j=0;j<m;j++){
                if(row[i]==1 || col[j]==1){
                    matrix[i][j]=1;
                }
            }
        }
    }
}
    
    
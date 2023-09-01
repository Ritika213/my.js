//Given two square matrices Grid1 and Grid2 with the same dimensions(NxN).Check whether they are identical or not.

Input:
N=2
Grid1=[[1,2],[3,4]]
Grid2=[[1,2],[3,4]]
Output:
1
Explanation
//Both the matrices are identical,so the answer is 1.

class Solution{
    areMatricesIdentical(n,grid1, grid2){
        //code here
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (grid1[i][j] !== grid2[i][j]) {
                    return 0; // Matrices are not identical
                }
            }
        }
        return 1; // Matrices are identical
    }
}

//Given the length of rectangle, width of rectangle, base of right angled triangle, perpendicular of right
// angled triangle and radius of circle respectively. Calculate the area of rectangle, right angled triangle and circle.

Input: L = 32 , W = 32 , B = 54 
       H = 12 , R = 52
Output: //1024 324 8490 
Explanation
//Area of Rectangle = L*W = 32*32 = 1024
//Area of Triangle = 0.5*B*H = 0.5*54*12 = 324
//Area of Circle = 3.14*(52)2 = 8490

class Solution{
    getAreas(L, W, B, H, R){
        //code here
        let arr = [];

        // Calculate the area of a rectangle (L * W)
        arr.push(L * W);

        // Calculate the area of a triangle (0.5 * B * H)
        arr.push(Math.floor(0.5 * B * H));

        // Calculate the area of a circle (π * R^2)
        arr.push(Math.floor(3.14 * R * R));

        return arr; // Return an array containing the calculated areas
    
    }
}



//Given a matrix Grid[][] of size NxN. Calculate the absolute difference between the sums of its diagonals.

Input:
N=3
Grid=[[1,2,3],[4,5,6],[7,8,9]]
Output: 
0
Explanation//Sum of primary diagonal = 1+5+9 = 15.Sum of secondary diagonal = 3+5+7 = 15.
//Difference = |15 - 15| = 0.

class Solution {
    diagonalSumDifference(grid, n) {
        //code here
         let sum1=0;
        let sum2=0;
        for(let i=0;i<n;i++){
            sum1+=grid[i][i];
        }
        for(let i=0;i<n;i++){
            sum2+=grid[i][n-i-1];
        }
        if((sum1-sum2)<0){
            return sum2-sum1;
        }
        else{
            return sum1-sum2;
        }
    }
}
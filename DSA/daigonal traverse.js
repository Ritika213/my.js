//Given an m x n matrix mat, return an array of all the elements of the array in a diagonal order.

 
Input: mat = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,4,7,5,3,6,8,9]
//Example 2:

Input: mat = [[1,2],[3,4]]
Output: [1,2,3,4]
 

Constraints:

m == mat.length
n == mat[i].length
1 <= m, n <= 104
1 <= m * n <= 104
-105 <= mat[i][j] <= 105


var findDiagonalOrder = function(mat) {
   let i=0;
   let j=0;
   let arr=[];
   let direct = true; 
   let n = mat[0].length;
   let m= mat.length;
   while(arr.length < mat.length * n){
    arr.push(mat[i][j]);
    if(direct){
        i--, j++;
        if(j ===n){
            j =n-1;
            i += 2;
            direct = !direct;
        }
        if(i <0){
            i=0;
            direct = !direct;
        }
    }
    else {
        i++, j--;
        if(i === m){
            i = m-1;
            j+=2;
            direct = !direct;
        }
        if(j <0){
            j=0;
            direct = !direct;
        }
    }
    
   }
   return arr;
};
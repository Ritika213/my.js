//Give a N*N square matrix, return an array of its anti-diagonals in top-leftmost to bottom-rightmost order. In an element of a anti-diagonal (i, j),
// surrounding elements will be (i+1, j-1) and (i-1, j+1). Look at the examples for more clarity.

Input:
N = 2
matrix= //1 2
        //3 4
Output
//1 2 3 4
Explanation//List of anti-diagnoals in order is {1}, {2, 3}, {4}

class Solution {
    
    antiDiagonalPattern(matrix, n){
    
        let res=[] ;
        
        let i = 0, j = 0; 
        while(i < n && j < n) {
            let i1 = i, j1 = j; 
            while(i1 < n && j1 >= 0) {
                res.push(matrix[i1][j1]); 
                i1++, j1--; 
            }
            if(j == n - 1) i++; 
            else j++; 
        }
        return res; 
    }
}
//Given a boolean 2D array of n x m dimensions where each row is sorted. Find the 0-based index of the first row that has the maximum number of 1's.

Input: 
N = 4 , M = 4
Arr = //{{0, 1, 1, 1},
          // {0, 0, 1, 1},
          // {1, 1, 1, 1},
          // {0, 0, 0, 0}}
Output// 2
Explanation// Row 2 contains 4 1's (0-based indexing).

class Solution {
    
    rowWithMax1s(arr, n, m){
        // code here
        let row=0;
        let col=m-1;
        let count=0;
        let max_count=0;
        let max_row=-1;
        while(row < n && col >=0) {
            if(arr[row][col] == 1) {
                col--;
                count++;
            } else {
                if(max_count < count) {
                    max_count=count;
                    max_row = row;
                }
                row++;
            }
        }
    
        if(max_count < count) {
            max_count=count;
            max_row = row;
        }
        return max_row;
        
	
 
    }
}
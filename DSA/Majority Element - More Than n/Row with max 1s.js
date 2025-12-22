//given a 2D binary array arr[][] consisting of only 1s and 0s. Each row of the array is sorted in non-decreasing order. Your task 
//is to find and return the index of the first row that contains the maximum number of 1s. If no such row exists, return -1.

Note:

//The array follows 0-based indexing.
//The number of rows and columns in the array are denoted by n and m respectively.
Examples:

Input: arr = [[0,1,1,1], [0,0,1,1], [1,1,1,1], [0,0,0,0]]
Output: 2
Explanation:// Row 2 contains the most number of 1s (4 1s). Hence, the output is 2.
Input: arr = [[0,0], [1,1]]
Output: 1
Explanation:// Row 1 contains the most number of 1s (2 1s). Hence, the output is 1.
Input: arr = [[0,0], [0,0]]

Output: -1
Explanation: //No row contains any 1s, so the output is -1.
Constraints
//1 ≤ arr.size(), arr[i].size() ≤ 103
//0 ≤ arr[i][j] ≤ 1 

class Solution {
    rowWithMax1s(arr) {
        
        let ix = -1, count = 0;

        for (let row = 0; row < arr.length; row++) {

            let ct = 0, size = arr[0].length;

            for (let col = 0; col < size; col++) {

                if (arr[row][col] == '1') {

                    if ((size - col) > count) {
                        ix = row;
                        count = size - col;
                    }

                    break;
                }
            }

            if (count == size) {
                break
            }
        }

        return ix;  
    }
}



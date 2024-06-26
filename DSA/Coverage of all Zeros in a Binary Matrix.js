//Given a binary matrix contains 0s and 1s only, we need to find the sum of coverage of all zeros of the matrix where coverage for a 
//particular 0 is defined as a total number of ones around a zero in left, right, up and bottom directions.

Examples:

Input:
matrix = [[0, 1, 0],
          [0, 1, 1],
          [0, 0, 0]]
Output: 6
Explanation //There are a total of 6 coverage are there

Input: 
matrix = [[0, 1]]
Output: 1
Explanation: //There are only 1 coverage.
//Expected Time Complexity: O(n * m)
//Expected Space Complexity: O(1)

Constraints:
1 <= matrix.size, matrix[0].size <= 100


class Solution {
    /**
    * @param number n
    * @param number m
    * @param number[][] matrix

    * @returns number
    */
    findCoverage(matrix) {
        
         let n = matrix.length;
        let m = matrix[0].length;
        let cnt = 0;

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (matrix[i][j] == 0) {
                    if (i - 1 >= 0 && matrix[i - 1][j] == 1) {
                        cnt++;
                    }
                    if (j - 1 >= 0 && matrix[i][j - 1] == 1) {
                        cnt++;
                    }
                    if (i + 1 < n && matrix[i + 1][j] == 1) {
                        cnt++;
                    }
                    if (j + 1 < m && matrix[i][j + 1] == 1) {
                        cnt++;
                    }
                }
            }
        }
        return cnt;
    }
}

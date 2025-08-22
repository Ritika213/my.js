//Given a row-wise sorted matrix mat[][] of size n*m, where the number of rows and columns is always odd. Return the median of the matrix.

Examples:

Input: mat = [[1, 3, 5], 
                [2, 6, 9], 
                [3, 6, 9]]
Output: 5
Explanation:// Sorting matrix elements gives us [1, 2, 3, 3, 5, 6, 6, 9, 9]. Hence, 5 is median.
Input: mat = [[2, 4, 9],
                [3, 6, 7],
                [4, 7, 10]]
Output: 6
Explanation:// Sorting matrix elements gives us [2, 3, 4, 4, 6, 7, 7, 9, 10]. Hence, 6 is median.
Input: mat = [[3], [4], [8]]
Output: 4
Explanation:// Sorting matrix elements gives us [3, 4, 8]. Hence, 4 is median.
Constraints
//1 ≤ n, m ≤ 400
//1 ≤ mat[i][j] ≤ 2000

class Solution {
    median(mat) {
        
        let n = mat.length;
        let m = mat[0].length;
        let totalElements = n * m;
        let med = Math.floor(totalElements / 2) + 1;

        // Counter array (0 to 2000 values allowed)
        let counter = Array(2001).fill(0);

        // Fill frequency
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                counter[mat[i][j]]++;
            }
        }

        // Find median
        let total = 0;
        for (let i = 0; i < 2001; i++) {
            total += counter[i];
            if (total >= med) return i;
        }

        return -1; // Shouldn't reach here
    }
}
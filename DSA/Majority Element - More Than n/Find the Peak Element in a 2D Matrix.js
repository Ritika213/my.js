//Given a 2D matrix mat[][], identify any peak element within the matrix.

//An element is considered a peak if it is greater than or equal to its four immediate neighbors: top, bottom, left, and right. For 
//corner and edge elements, any missing neighbors are treated as having a value of negative infinity.

Note:// A peak element is not necessarily the global maximum, it only needs to satisfy the condition relative to its adjacent elements.
 //Multiple peak elements may exist, return any one of them.
//Note that the driver code will print true if you return the correct position of peak element, else it will print false.

Examples:

Input: mat = [[10, 20, 15],           
                [21, 30, 14],
                 [7, 16, 32]]
Output: true
Explanation// One of the peak element is 30 at index (1, 1), which is greater than or equal to all its valid neighbors: Left = 21,
 //Right = 14, Top = 20, Bottom = 16. So,
 //it satisfies the peak condition. Alternatively, (2, 2) with value 32 also qualifies as a peak.

 Input: mat = [[17, 7],
                [11, 10]]
Output: true
Explanation:// 17 is the only peak element at index (0, 0). Its neighbors are: Right= 7, Bottom = 11. Since 17 is greater than
// or equal to both (and top/left are out of bounds), it qualifies as a peak element.
Constraint
//1 ≤ n × m ≤ 106
//-106 ≤ mat[i][j] ≤ 106

/**
 * @param {number[][]} mat
 * @return {number[]}
 */

class Solution {
    findPeakGrid(mat) {
        let n = mat.length;
        let m = mat[0].length;

        let left = 0, right = m - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            // Find max element row in mid column
            let maxRow = 0;
            for (let i = 0; i < n; i++) {
                if (mat[i][mid] > mat[maxRow][mid]) {
                    maxRow = i;
                }
            }

            let leftVal = mid - 1 >= 0 ? mat[maxRow][mid - 1] : -Infinity;
            let rightVal = mid + 1 < m ? mat[maxRow][mid + 1] : -Infinity;

            if (
                mat[maxRow][mid] >= leftVal &&
                mat[maxRow][mid] >= rightVal
            ) {
                return [maxRow, mid];
            }
            else if (leftVal > mat[maxRow][mid]) {
                right = mid - 1;
            }
            else {
                left = mid + 1;
            }
        }

        return [-1, -1];
    }
}

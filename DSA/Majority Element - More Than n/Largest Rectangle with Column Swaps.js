//Given a binary matrix mat[][] of size n × m containing only 0s and 1s, any pair of columns may be swapped
//  any number of times. Return the maximum area of a rectangle consisting entirely of 1's that can be formed
//  after performing the column swaps.

Examples:

Input: mat = [[0, 1, 0, 1, 0], [0, 1, 0, 1, 1], [1, 1, 0, 1, 0]]
Output: 6
Explanation// After swapping the 2nd and 3rd columns, the largest rectangle of 1s has an area of 6.

Input: mat = [[0, 1, 1, 0, 0], [1, 1, 1, 0, 1], [1, 1, 1, 0, 1], [1, 1, 1, 1, 1]]
Output: 12
Explanation: //After swapping the 4th and 5th columns, the largest rectangle of 1s has an area of 12.

Constraints:

//1 ≤ n, m ≤ 103
//0 ≤ mat[i][j] ≤ 1
mat.rows = n
mat.cols = m

/*
 * @param {number[][]} mat
 * @return {number}
 */
class Solution {
    maxArea(mat) {
        
        let n = mat.length;
        let m = mat[0].length;
        let height= new Array(m).fill(0);

        let answer = 0;

        for (let i = 0; i < n; i++) {

            let count= new Array(n + 1).fill(0);

            for (let j = 0; j < m; j++) {
                if (mat[i][j] == 1) {
                    height[j]++;
                } else {
                    height[j] = 0;
                }

                count[height[j]]++;
            }
   let width = 0;

    for (let h = n; h >= 1; h--) {
        width += count[h];

        answer = Math.max(answer, h * width);
    }
}

return answer;
    }
}
 
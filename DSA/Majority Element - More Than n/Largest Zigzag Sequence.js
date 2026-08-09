//Given a square matrix mat[][] of size n × n. A zigzag sequence starts from the top and ends at the bottom.
//  Two consecutive elements of sequence cannot belong to the same column.

//Return the maximum sum of such a zigzag sequence.

Examples:

Input: mat = [[3, 1, 2], [4, 8, 5], [6, 9, 7]]
Output: 18
Explanation:

// optimal zigzag sequence is: 3 -> 8 -> 7, where the sum = 3 + 8 + 7 = 18.
Input: mat = [[1, 2, 4], [3, 9, 6], [11, 3, 15]]
Output: 28

Output: 28
Explanation:

//One optimal zigzag sequence is: 4 -> 9 -> 15, where the sum = 4 + 9 + 15 = 28.
Constraints
//1 ≤ n ≤ 100
//1 ≤ mat[i][j] ≤ 1000 


class Solution {
    zigzagSequence(mat) {
        // code here
        let n = mat.length;

        let dp = new Array(n);

        for (let j = 0; j < n; j++) {
            dp[j] = mat[0][j];
        }

        for (let i = 1; i < n; i++) {
            let max1 = -1;
            let max2 = -1;
            let max1Col = -1;

            for (let j = 0; j < n; j++) {
                if (dp[j] > max1) {
                    max2 = max1;
                    max1 = dp[j];
                    max1Col = j;
                } else if (dp[j] > max2) {
                    max2 = dp[j];
                }
            }

            let next = new Array(n);

            for (let j = 0; j < n; j++) {
                let bestPrevious;

                if (j !== max1Col) {
                    bestPrevious = max1;
                } else {
                    bestPrevious = max2;
                }

                next[j] = mat[i][j] + bestPrevious;
            }

            dp = next;
        }

        return Math.max(...dp);
    }
}
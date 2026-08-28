//Given an n × 3 matrix mat[][], where each row represents the costs of three available choices at a shop, select 
// exactly one choice from each row such that the same choice is not selected in two adjacent rows.

//Return the minimum total cost required.

Examples:

Input: mat = [[1, 50, 50], [50, 50, 50], [1, 50, 50]]
Output: 52
Explanation:// One optimal selection is- Row 1: Choice 1 (Cost = 1), Row 2: Choice 2 (Cost = 50), Row 3: Choice 1 (Cost = 1)
//Total cost = 1 + 50 + 1 = 52.
Input: mat = [[1, 4, 1], [3, 2, 2], [3, 2, 3]]
Output: 5
Explanation:// One optimal selection is- Row 1: Choice 1 (Cost = 1), Row 2: Choice 2 (Cost = 2), Row 3: Choice 3 (Cost = 2)
//Total cost = 1 + 2 + 2 = 5.
Constraints

//1 ≤ n ≤ 105
//3 ≤ mat[0].size() ≤ 3
//1 ≤ mat[i][j] ≤ 100
mat.rows = n


/**
 * @param {number[][]} mat
 * @return {number}
 */
class Solution {
    minCost(mat) {
        
        let prev0 = mat[0][0];
        let prev1 = mat[0][1];
        let prev2 = mat[0][2];

        for (let i = 1; i < mat.length; i++) {
            let curr0 = mat[i][0] + Math.min(prev1, prev2);

            let curr1 = mat[i][1] + Math.min(prev0, prev2);

            let curr2 = mat[i][2] + Math.min(prev0, prev1);

            prev0 = curr0;
            prev1 = curr1;
            prev2 = curr2;
        }

        return Math.min(prev0, Math.min(prev1, prev2));
    }
}



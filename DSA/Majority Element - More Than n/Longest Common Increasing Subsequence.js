//Given two arrays, a[] and b[], find the length of the longest common increasing subsequence(LCIS).

Note: // LCIS refers to a subsequence that is present in both arrays and strictly increases.

Examples:

Input: a = [3, 4, 9, 1], b = [5, 3, 8, 9, 10, 2, 1]
Output: 2
Explanation:// The longest increasing subsequence that is common is [3, 9] and its length is 2.
Input: a = [1, 1, 4, 3], b = [1, 1, 3, 4]
Output: 2
Explanation:// There are two common subsequences [1, 4] and [1, 3] both of length 2.
Constraints
//1 ≤ a.size(), b.size() ≤ 103
//1 ≤ a[i], b[i] ≤ 104


class Solution {
    LCIS(a, b) {
        
        let n = a.length, m = b.length;

        // dp[j] = LCIS ending at b[j]
        let dp = new Array(m).fill(0);
        
        for (let i = 0; i < n; i++) {
            let curr_max = 0;
            for (let j = 0; j < m; j++) {

                if (a[i] === b[j]) {
                    dp[j] = Math.max(dp[j], curr_max + 1);
                }

                if (b[j] < a[i]) {
                    curr_max = Math.max(curr_max, dp[j]);
                }
            }
        }

        return Math.max(...dp);
    }
}
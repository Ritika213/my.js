//Given an array arr[] of size n, partition its elements into a strictly increasing subsequence and a
//  strictly decreasing subsequence.

//Each element can belong to at most one of these subsequences, and some elements may remain unused.

//Determine the minimum number of elements that cannot be included in either subsequence.

Examples:

Input: arr = [7, 8, 1, 2, 4, 6, 3, 5, 2, 1, 8, 7]
Output: 2
Explanation:// One possible increasing subsequence is: [1, 2, 4, 5, 8]. One possible decreasing subsequence
// is: [7, 6, 3, 2, 1]. The remaining elements are 8 and 7, so the minimum number of unselected elements is 2.
Input: arr = [1, 4, 2, 3, 3, 2, 4]
Output: 0
Explanation:// One possible increasing subsequence is: [1, 2, 3, 4]. One possible decreasing subsequence is:
// [4, 3, 2]. All elements are included in one of the two subsequences.
Constraints
//1 ≤ n ≤ 100

//1 ≤ arr[i] ≤ 100

class Solution {
    minCount(arr) {
        const n = arr.length;

        // dp[i][j][k]
        const dp = Array.from({ length: n + 1 }, () =>
            Array.from({ length: n + 2 }, () =>
                new Array(n + 2).fill(0)
            )
        );

        for (let i = 0; i <= n; i++) {
            for (let j = 1; j <= n + 1; j++) {
                for (let k = 1; k <= n + 1; k++) {

                    if (i === 0) {
                        dp[i][j][k] = 0;
                    } 
                    else {
                        // Don't take arr[i-1]
                        dp[i][j][k] = dp[i - 1][j][k];

                        // Put arr[i-1] in increasing sequence
                        if (j === n + 1 || arr[i - 1] < arr[j - 1]) {
                            dp[i][j][k] = Math.max(
                                dp[i][j][k],
                                dp[i - 1][i][k] + 1
                            );
                        }

                        // Put arr[i-1] in decreasing sequence
                        if (k === n + 1 || arr[i - 1] > arr[k - 1]) {
                            dp[i][j][k] = Math.max(
                                dp[i][j][k],
                                dp[i - 1][j][i] + 1
                            );
                        }
                    }
                }
            }
        }

        return n - dp[n][n + 1][n + 1];
    }
}

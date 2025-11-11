//Given two strings s1 and s2, find the length of the smallest string which has both s1 and s2 as its sub-sequences.
Note: //s1 and s2 can have both uppercase and lowercase English letters.

Examples:

Input: s1 = "geek", s2 = "eke"
Output: 5
Explanation:// String "geeke" has both string "geek" and "eke" as subsequences.
Input: s1 = "AGGTAB", s2 = "GXTXAYB"
Output: 9
Explanation:// String "AGXGTXAYB" has both string "AGGTAB" and "GXTXAYB" as subsequences.
Input: s1 = "geek", s2 = "ek"
Output: 4
Explanation: //String "geek" has both string "geek" and "ek" as subsequences.
Constraints
//1 ≤ s1.size(), s2.size() ≤ 500

class Solution {
    minSuperSeq(s1, s2) {
        
        let n = s1.length;
        let m = s2.length;
        
         // Step 1: Create a 2D dp array (for LCS)
        let dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));

        // Step 2: Fill the dp table
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= m; j++) {
                if (s1[i - 1] === s2[j - 1]) {
                    dp[i][j] = 1 + dp[i - 1][j - 1];
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }

        // Step 3: Use the formula
        return n + m - dp[n][m];
    }
}
//Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.
//Interleaving of two strings s1 and s2 is a way to mix their characters to form a new string s3, while maintaining the relative order
// of characters from s1 and s2. Conditions for interleaving:

//Characters from s1 must appear in the same order in s3 as they are in s1.
//Characters from s2 must appear in the same order in s3 as they are in s2.
//The length of s3 must be equal to the combined length of s1 and s2.
Examples :

Input: s1 = "AAB", s2 = "AAC", s3 = "AAAABC"
Output: true
Explanation: //The string "AAAABC" has all characters of the other two strings and in the same order.
Input: s1 = "AB", s2 = "C", s3 = "ACB"
Output: true
Explanation// s3 has all characters of s1 and s2 and retains order of characters of s1.

Input: s1 = "YX", s2 = "X", s3 = "XXY"
Output: false
Explanation:// "XXY " is not interleaved of "YX" and "X". The strings that can be formed are YXX and XYX
Constraints
//1 ≤ s1.length, s2.length ≤ 300
//1 ≤ s3.length ≤ 600


class Solution {
    isInterleave(s1, s2, s3) {
        const n1 = s1.length, n2 = s2.length, n3 = s3.length;
        if (n1 + n2 !== n3) return false;

        // Ensure dp runs on the smaller second dimension if you want micro-optimizations:
        // (not necessary but common trick). We'll keep s2 as the second string.
        let dp = Array(n2 + 1).fill(false);
        dp[0] = true;

        // initialize using only s2 (i = 0)
        for (let j = 1; j <= n2; j++) {
            dp[j] = dp[j - 1] && s2[j - 1] === s3[j - 1];
        }

        for (let i = 1; i <= n1; i++) {
            // update dp[0] for current i (using only s1)
            dp[0] = dp[0] && s1[i - 1] === s3[i - 1];
            for (let j = 1; j <= n2; j++) {
                // dp[j] (old) is dp[i-1][j]; dp[j-1] (just updated) is dp[i][j-1]
                dp[j] = (dp[j] && s1[i - 1] === s3[i + j - 1]) ||
                        (dp[j - 1] && s2[j - 1] === s3[i + j - 1]);
            }
        }

        return dp[n2];
    }
}

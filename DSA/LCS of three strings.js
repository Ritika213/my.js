//Difficulty: MediumAccuracy: 48.52%Submissions: 76K+Points: 4
//Given three strings s1, s2, and s3 containing uppercase letters, lowercase letters, and digits, find the length of longest 
//common sub-sequence in all three given strings.

Examples:

Input: s1 = "geeks", s2 = "geeksfor", s3 = "geeksforgeeks"
Output: 5
Explanation:// "geeks"is the longest common subsequence with length 5.
Input: s1 = "abcd1e2", s2 = "bc12ea", s3 = "bd1ea"
Output: 3
Explanation://  Longest common subsequence is "b1e" i.e. length = 3.
Constraints
//1  ≤  s1.size(), s2.size(), s3.size()  ≤  100

class Solution {
    lcsOf3(s1, s2, s3) {
        // Code here
        let n=s1.length;
        let m=s2.length;
        let o=s3.length;
        // Create 3D array in JavaScript
        let dp = new Array(n + 1);
        for (let i = 0; i <= n; i++) {
            dp[i] = new Array(m + 1);
            for (let j = 0; j <= m; j++) {
                dp[i][j] = new Array(o + 1).fill(0);
            }
        }
         for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= m; j++) {
                for (let k = 1; k <= o; k++) {
                    if (
                        s1.charAt(i - 1) === s2.charAt(j - 1) &&
                        s2.charAt(j - 1) === s3.charAt(k - 1)
                    ) {
                        dp[i][j][k] = 1 + dp[i - 1][j - 1][k - 1];
                    } else {
                        dp[i][j][k] = Math.max(
                            dp[i - 1][j][k],
                            dp[i][j - 1][k],
                            dp[i][j][k - 1]
                        );
                    }
                }
            }
        }

        return dp[n][m][o];
    
  
    }
}
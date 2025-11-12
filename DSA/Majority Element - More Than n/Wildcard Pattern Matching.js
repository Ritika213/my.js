//Given two strings pat and txt which may be of different sizes, You have to return true if the wildcard pattern i.e. pat,
// matches with txt else return false.

//The wildcard pattern pat can include the characters '?' and '*'.

//'?' – matches any single character.
//'*' – matches any sequence of characters (including the empty sequence).
//Note: The matching should cover the entire txt (not partial txt).

Examples:

Input: txt = "abcde", pat = "a?c*"
Output: true
Explanation: //'?' matches with 'b' and '*' matches with "de".
Input: txt = "baaabab", pat = "a*ab"
Output: false
Explanation// The pattern starts with a, but the text starts with b, so the pattern does not match the text.

Input: txt = "abc", pat = "*"
Output: true
Explanation: //'*' matches with whole text "abc".
Constraints
//1 ≤ txt.size(), pat.size() ≤ 100


class Solution {
    wildCard(txt, pat) {
        
        let n = pat.length;
        let m = txt.length;
        
        let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(false));
         // Empty pattern matches empty text
        dp[0][0] = true;

        // If pattern starts with '*', it can match an empty text
        for (let i = 1; i <= n; i++) {
            if (pat[i - 1] === '*') dp[i][0] = dp[i - 1][0];
        }

        // Fill the DP table
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= m; j++) {
                let p = pat[i - 1];
                let t = txt[j - 1];

                if (p === t || p === '?') {
                    dp[i][j] = dp[i - 1][j - 1];
                } else if (p === '*') {
                    // '*' can match zero or more characters
                    dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
                } else {
                    dp[i][j] = false;
                }
            }
        }

        return dp[n][m];
    
    }
}
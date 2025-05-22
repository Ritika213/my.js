//Given a string s, write a program to delete the minimum number of characters from the string so that the resultant string is a palindrome,
 //while maintaining the order of characters.

Examples:

Input: s = "aebcbda"
Output: 2
Explanation:// Remove characters 'e' and 'd'.
Input: s = "geeksforgeeks"
Output: 8
Explanation:// To make "geeksforgeeks" a palindrome, the longest palindromic subsequence is "eefee" (length 5). The minimum deletions are:
//13 (length of s) - 5 = 8.
Constraints
//1 ≤ s.size() ≤ 103

class Solution {
    minDeletions(s) {
        
          const n = s.length;
        const reversed = s.split('').reverse().join('');
        return n - this.lcs(s, reversed);
    }

    lcs(a, b) {
        const n = a.length;
        const dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                if (a[i - 1] === b[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }
        return dp[n][n];
    }
}
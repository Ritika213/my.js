//Given two strings, s1 and s2, count the number of subsequences of string s1 equal to string s2.

//Return the total count modulo 1e9+7.

//Example 1:

Input: 
s1 = geeksforgeeks
s2 = gks
Output:
4
Explaination 
//We can pick characters from s1 as a subsequence from indices {0,3,4}, {0,3,12}, {0,11,12} and {8,11,12}.So total 4 subsequences of s1 that are 
//equal to s2.Example 2:

//Example 2:

Input: 
s1 = problemoftheday
s2 = geek
Output:
0
Explaination: 
//No subsequence of string s1 is equal to string s2.
Task
//don't need to read input or print anything. Your task is to complete the function countWays() which takes the string s1 and s2 as input 
//parameters and returns the number of subsequences of s1 equal to s2.

//Expected Time Complexity: O(n*m)        [n and m are lengths of the strings s1 and s2]
//Expected Auxiliary Space: O(n*m)           [n and m are lengths of the strings s1 and s2]

Constraints
//1 ≤ n, m ≤ 500  [n and m are lengths of the strings s1 and s2]

class Solution {
    static MOD = 1e9 + 7;

    /**
     * @param {string} s1
     * @param {string} s2
     * @returns {number}
     */
    countWays(s1, s2) {
        const m = s1.length;
        const n = s2.length;
        
        // Create a 2D array dp[][] with dimensions (m+1) x (n+1)
        const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

        // Initialize dp[i][0] to 1 for all i, indicating an empty s2 is a subsequence of any prefix of s1
        for (let i = 0; i <= m; i++) {
            dp[i][0] = 1;
        }

        // Initialize dp[0][j] to 0 for all j > 0, indicating a non-empty s2 cannot be a subsequence of an empty s1
        for (let j = 1; j <= n; j++) {
            dp[0][j] = 0;
        }

        // Fill the rest of the entries in dp[][] using the recursive formula
        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                if (s1.charAt(i - 1) === s2.charAt(j - 1)) {
                    dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j]) % Solution.MOD;
                } else {
                    dp[i][j] = dp[i - 1][j];
                }
            }
        }

        // Return the total count of subsequences of s1 that equal s2 modulo 1e9+7
        return dp[m][n];
    }
}

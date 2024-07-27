//Given a string, find the minimum number of characters to be inserted to convert it to a palindrome.

Examples :

Input: str = "abcd"
Output: 3
Explanation: //Inserted character marked with bold characters in dcbabcd, here we need minimum three characters to make it palindrome.
Input: str = "aa"
Output: 0
Explanation: //"aa" is already a palindrome.
//Expected Time Complexity: O(n2)
//Expected Auxiliary Space: O(n2)

Constraints
//1 ≤ |str| ≤ 500
//str contains only lowercase alphabets.


class Solution{
    countMin(str){
        //code here
        let n = str.length;
        let dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
        let rev = str.split('').reverse().join('');
        
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                if (str[i - 1] === rev[j - 1]) {
                    dp[i][j] = 1 + dp[i - 1][j - 1];
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }
        return n - dp[n][n];  
    
    }
}

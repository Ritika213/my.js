//Given a string str of length n, find if the string is K-Palindrome or not. A k-palindrome string transforms into a palindrome on 
//removing at most k characters from it.


//Example 1:

Input: str = "abcdecba"
n = 8, k = 1
Output: 1
Explaination// By removing 'd' or 'e' we can make it a palindrome.

//Example 2:

Input: str = "abcdefcba"
n = 9, k = 1
Output: 0
Explaination:// By removing a single character we cannot make it a palindrome.

Task
//do not need to read input or print anything. Your task is to complete the function kPalindrome() which takes string str, n, and k as 
//input parameters and returns 1 if str is a K-palindrome else returns 0.


//Expected Time Complexity: O(n*n)
//Expected Auxiliary Space: O(n*n)

Constraints
//1 ≤ n, k ≤ 103

class Solution {
    constructor() {
        this.dp = [];
    }

    findAns(s, e, str) {
        if (s >= e) return 0;
        if (this.dp[s][e] != -1) return this.dp[s][e];

        if (str.charAt(s) === str.charAt(e)) {
            return this.dp[s][e] = this.findAns(s + 1, e - 1, str);
        } else {
            return this.dp[s][e] = 1 + Math.min(this.findAns(s + 1, e, str), this.findAns(s, e - 1, str));
        }
    }

    kPalindrome(str, n, k) {
        this.dp = Array.from({ length: n }, () => Array(n).fill(-1));
        return this.findAns(0, str.length - 1, str) > k ? 0 : 1;
    }
}

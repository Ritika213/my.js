//Given a numeric string s containing only digits and an integer n, count the number of non-empty subsequences
//  of s whose numeric value is divisible by n. Return the answer modulo 1e9 + 7.

Examples:

Input: s = "1234", n = 4
Output: 4
Explanation:// The subsequences 4, 12, 24 and 124 are divisible by 4.
Input: s = "330", n = 6
Output: 4
Explanation:// The subsequences 30, 30, 330 and 0 are divisible by 6.
Constraints
//1 ≤ |s| * n ≤ 106

class Solution {
    countSubsequences(s, n) {
        const MOD = 1000000007;

        let dp = new Array(n).fill(0);

        for (let ch of s) {
            let digit = ch.charCodeAt(0) - '0'.charCodeAt(0);

            // Copy current dp
            let next = [...dp];

            for (let remainder = 0; remainder < n; remainder++) {
                let newRemainder = (remainder * 10 + digit) % n;

                next[newRemainder] =
                    (next[newRemainder] + dp[remainder]) % MOD;
            }

            // Start a new subsequence with current digit
            next[digit % n] =
                (next[digit % n] + 1) % MOD;

            // JavaScript me swap()
            dp = next;
        }

        return dp[0];
    }
}

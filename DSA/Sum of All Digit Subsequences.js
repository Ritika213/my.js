//Given a string s which consists of digits, find sum of all digits across all non-empty subsequences of s.

Note:// Since the answer can be very large, return it modulo 10^9 + 7.

Examples:

Input: s = "123" 
Output: 24
Explanation:// The non-empty subsequences are: [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]. The sum of all
// digits in these subsequences is: 1 + 2 + 3 + (1 + 2) + (1 + 3) + (2 + 3) + (1 + 2 + 3) = 24.
Input: s = "405"
Output: 36
Explanation: //The non-empty subsequences are: [4], [0], [5], [4, 0], [4, 5], [0, 5], [4, 0, 5]. The sum of 
//all digits in these subsequences is 36.
Constraints

//1 ≤ s.size() ≤ 105
//s consists only of digits(1 - 9).


/**
 * @param {string} s
 * @return {number}
 */

class Solution {
    subsequenceSum(s) {
        // code here
        let MOD = 1000000007;
        let ds = 0;
        let n = s.length;

        for (let ch of s) {
            ds = (ds + Number(ch)) % MOD;
        }

        let df = 1;
        for (let i = 1; i < n; i++) {
            df = (df * 2) % MOD;
        }

        return (ds * df) % MOD;
    }
}
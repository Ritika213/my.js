//Given a string s consisting of lowercase English letters and the character '?', 

//Replace every '?' with a lowercase English letter such that the resulting string is a palindrome.
//If it is possible to form a palindrome, return the minimum possible sum of the absolute ASCII differences
//  between every pair of adjacent characters in the resulting string.
//If it is not possible to form a palindrome, return -1.
Examples:

Input:// s = a???c??c????
Output: 4
Explanation: //One optimal palindrome is "abbbccccbbba". The sum of the absolute ASCII differences between 
//adjacent characters is 1 + 0 + 0 + 1 + 0 + 0 + 0 + 1 + 0 + 0 + 1 = 4, which is the minimum possible. 
Input: //s = a???c??c???c
Output: -1
Explanation// It is not possible to replace the '?' characters to make the string a palindrome because the
// first and last characters are different and cannot be changed.
//Constraints:
//1 ≤ s.size() ≤ 105

/**
 * @param {string} s
 * @returns {number}
 */
class Solution {
    minimumSum(s) {
        let n = s.length;

        for (let i = 0; i < n / 2; i++) {
            let left = s.charAt(i);
            let right = s.charAt(n - 1 - i);

            if (left !== '?' && right !== '?' && left !== right) {
                return -1;
            }
        }

        let sum = 0;
        let prev = '?';

        for (let i = 0; i <= Math.floor((n - 1) / 2); i++) {
            let left = s.charAt(i);
            let right = s.charAt(n - 1 - i);

            let current;

            if (left !== '?') {
                current = left;
            } else {
                current = right;
            }

            if (current === '?') {
                continue;
            }

            if (prev !== '?') {
                sum += Math.abs(
                    current.charCodeAt(0) - prev.charCodeAt(0)
                );
            }

            prev = current;
        }

        return 2 * sum;
    }
}
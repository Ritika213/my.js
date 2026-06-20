//Given two integers a and b in the form of strings. Return the last digit of ab.

Examples:

Input: a = "3", b = "10"
Output: 9
Explanation:// 310 = 59049. Last digit is 9.
Input: a = "6", b = "2"
Output: 6
Explanation:// 62 = 36. Last digit is 6.
Constraints
//1 ≤ a.size(), b.size() ≤ 1000
//a and b consist only of numeric digits ('0' - '9')
//a and b do not contain any leading zeros, except when number itself is "0"

/**
 * @param {string} a
 * @param {string} b
 * @returns {number}
 */

class Solution {
    getLastDigit(a, b) {
        
         if (b === "0") {
            return 1;
        }

        let base = Number(a[a.length - 1]);

        let exp_mod_4 = 0;
        for (let c of b) {
            exp_mod_4 = (exp_mod_4 * 10 + (c - '0')) % 4;
        }

        if (exp_mod_4 == 0) {
            exp_mod_4 = 4;
        }

        let result = 1;
        for (let i = 0; i < exp_mod_4; i++) {
            result = (result * base) % 10;
        }

        return result;
    }
}
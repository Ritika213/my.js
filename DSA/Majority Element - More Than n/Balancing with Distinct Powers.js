//Given a simple weighing scale with two pans, a target weight b, and a set of weights where each weight 
// is a distinct power of a, find if the scale can be balanced such that:

//b + (some powers of a) = (some other powers of a)

Note:// Exactly one weight is available for each power of a, so each power can be used at most once.

Examples:

Input: a = 4, b = 11
Output: true
Explanation:// 11 + 4 + 1 = 16. So, target = 11 can be balanced using powers of 4.
Input: a = 3, b = 5
Output: true
Explanation: //5 + 3 + 1 = 9. So, target = 5 can be balanced using powers of 3.
Constraints

//2 ≤ a ≤ 109
//1 ≤ b ≤ 109


/**
 * @param {number} a
 * @param {number} b
 * @return {boolean}
 */
class Solution {
    balancePan(a, b) {
        
        if (a <= 0 || b < 0) return 0;
               if (a === 1) return 1;

               while (b) {
                   let r = b % a;
                   if (r === 0) b /= a;
                   else if (r === 1) b = (b - 1) / a;
                   else if (r === a - 1) b = (b + 1) / a;
                   else return 0;
               }

               return 1;
    }
}
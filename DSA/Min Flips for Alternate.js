//Given a binary string s, we can flip any bit (change 0 to 1 or 1 to 0) to make the string alternating. 
// A string is called alternating if no two adjacent characters are the same.

//Find the minimum number of bit flips required to make the string alternating.

Examples:

Input: s = "001"
Output: 1
Explanation:// Flip the bit at index 0 from 0 to 1 to obtain "101", which is an alternating binary string.
// Hence, the minimum number of flips required is 1.
Input: s = "0001010111" 
Output: 2
Explanation: //Flip the bit at indices 1 and 8 to obtain "0101010101", which is an alternating binary string.
// Hence, the minimum number of flips required is 2.
Constraints

//1 ≤ s.size() ≤ 105
//s consists only of the characters 0 and 1

/**
 * @param {string} s
 * @returns {number}
 */

class Solution {
    minFlips(s) {
        
        let count1 = 0, count2 = 0;

                for (let i = 0; i < s.length; i++) {
                    let expected1 = (i % 2 === 0) ? '0' : '1';
                    let expected2 = (i % 2 === 0) ? '1' : '0';

                    if (s.charAt(i) != expected1) {
                        count1++;
                    }

                    if (s.charAt(i) != expected2) {
                        count2++;
                    }
                }

                return Math.min(count1, count2);
    }
}
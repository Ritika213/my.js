//Given a binary string s consisting of 0s and 1s. Find the maximum difference of the number of 0s and the number
//  of 1s (number of 0s – number of 1s) in a substring of the string.

Note:// In the case of all 1s, the answer will be -1.

Examples:

Input : s = "11000010001" 
Output : 6 
Explanatio:// From index 2 to index 9, there are 7 0s and 1 1s, so number of 0s - number of 1s is 6. 
Input: s = "111111"
Output: -1
Explanation:// s contains 1s only 
Constraints
//1 ≤ s.size() ≤ 105

/**
 * @param {string} s
 * @returns {number}
 */

class Solution {
    maxSubstring(s) {
        
         let n = s.length;
        let diff = -Infinity;
        
        let zeros = 0, ones = 0;
        for (let i=0; i<n; i++) {
            
            if (s.charAt(i) === '0') zeros++;
            else ones++;
            
            if (zeros < ones) zeros = ones = 0;
            else diff = Math.max(diff, zeros - ones);
        }
        
        if (diff < 0) return -1;
        return diff;
    }
}

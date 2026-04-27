//Given a string s consisting only of the characters '0', '1' and '2', determine the length of the smallest substring that contains 
// all three characters at least once.

//If no such substring exists, return -1.

Examples :

Input: s = "10212"
Output: 3
Explanation:// The substring "102" is the shortest substring that contains all three characters '0', '1', and '2', so the answer is 3.
Input: s = "12121"
Output: -1
Explanation:// The character '0' is not present in the string, so no substring can contain all three characters '0', '1', and '2'.
// Hence, the answer is -1.
Constraints
//1 ≤ s.size() ≤ 105

/**
 * @param {string} s
 * @returns {number}
 */
class Solution {
    smallestSubstring(s) {
        
         let ump = new Map();
    let i = 0, j = 0, len = Infinity;

    while (j < s.length) {
      ump.set(s[j], (ump.get(s[j]) || 0) + 1);
      while (ump.size === 3) {
        len = Math.min(len, j - i + 1);
        ump.set(s[i], ump.get(s[i]) - 1);
        if (ump.get(s[i]) === 0) ump.delete(s[i]);
        i++;
      }

      j++;
    }

    return len === Infinity ? -1 : len;
    }
};
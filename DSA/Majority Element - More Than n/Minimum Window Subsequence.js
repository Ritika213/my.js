//given two strings, s1 and s2. Your task is to find the smallest substring in s1 such that s2 appears as a subsequence within 
// that substring.

//The characters of s2 must appear in the same sequence within the substring of s1.
//If there are multiple valid substrings of the same minimum length, return the one that appears first in s1.
//If no such substring exists, return an empty string.
Note:// Both the strings contain only lowercase english letters.

Examples:

Input: s1 = "geeksforgeeks", s2 = "eksrg"
Output: "eksforg"
Explanation// "eksforg" satisfies all required conditions. s2 is its subsequence and it is smallest and leftmost among all possible 
//valid substrings of s1.

Examples:

Input: s1 = "geeksforgeeks", s2 = "eksrg"
Output: "eksforg"
Explanation:// "eksforg" satisfies all required conditions. s2 is its subsequence and it is smallest and leftmost among all possible 
//valid substrings of s1.
Input: s1 = "abcdebdde", s2 = "bde" 
Output: "bcde"
Explanation: // "bcde" and "bdde" are two substring of s1 where s2 occurs as subsequence but "bcde" occur first so we return that.
Input: s1 = "ad", s2 = "b" 
Output: ""
Explanation: //There is no substring exists.
Constraints
//1 ≤ s1.length ≤ 104
//1 ≤ s2.length ≤ 50

//given two strings, s1 and s2. Your task is to find the smallest substring in s1 such that s2 appears as a subsequence within that 
// substring.

//The characters of s2 must appear in the same sequence within the substring of s1.
//If there are multiple valid substrings of the same minimum length, return the one that appears first in s1.
//If no such substring exists, return an empty string.
Note: //Both the strings contain only lowercase english letters.

Examples:

Input: s1 = "geeksforgeeks", s2 = "eksrg"
Output: "eksforg"
Explanation:// "eksforg" satisfies all required conditions. s2 is its subsequence and it is smallest and leftmost among all possible valid
// substrings of s1.
Input: s1 = "abcdebdde", s2 = "bde" 
Output: "bcde"
Explanation://  "bcde" and "bdde" are two substring of s1 where s2 occurs as subsequence but "bcde" occur first so we return that.
Input: s1 = "ad", s2 = "b" 
Output: ""
Explanation:// There is no substring exists.
Constraints
//1 ≤ s1.length ≤ 104
//1 ≤ s2.length ≤ 50

/**
 * @param {string} s1
 * @param {string} s2
 * @returns {string}
 */

class Solution {
    minWindow(s1, s2) {
        let i = 0, j = 0;
        let n = s1.length, m = s2.length;
        let ans = "";
        let len = Infinity;

        while (i < n) {
            if (s1[i] === s2[j]) j++;

            // full s2 matched
            if (j === m) {
                let end = i;
                j = m - 1;

                // move backward to minimize window
                while (i >= 0 && j >= 0) {
                    if (s1[i] === s2[j]) j--;
                    i--;
                }

                i++;
                if (end - i + 1 < len) {
                    len = end - i + 1;
                    ans = s1.substr(i, len);
                }

                j = 0;
            }
            i++;
        }
        return ans;
    }
}

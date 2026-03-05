//given a string s consisting only lowercase alphabets and an integer k. Your task is to find the length of the longest substring 
// that contains exactly k distinct characters.

Note :// If no such substring exists, return -1. 

Examples:

Input: s = "aabacbebebe", k = 3
Output: 7
Explanation: //The longest substring with exactly 3 distinct characters is "cbebebe", which includes 'c', 'b', and 'e'.
Input: s = "aaaa", k = 2
Output: -1
Explanation:// There's no substring with 2 distinct characters.
Input: s = "aabaaab", k = 2
Output: 7
Explanation:// The entire string "aabaaab" has exactly 2 unique characters 'a' and 'b', making it the longest valid substring.
Constraints
//1 ≤ s.size() ≤ 105
//1 ≤ k ≤ 26

/**
 * @param {string} s
 * @param {number} k
 * @returns {number}
 */
class Solution {
    longestKSubstr(s, k) {
        
        let ans = -1;
    const mp = new Map();
    let i = 0;
    let j = 0;
    
    while (j < s.length) {
        if (!mp.has(s[j])) {
            mp.set(s[j], 1);
        } else {
            mp.set(s[j], mp.get(s[j]) + 1);
        }
        
        while (mp.size > k) {
            mp.set(s[i], mp.get(s[i]) - 1);
            if (mp.get(s[i]) === 0) {
                mp.delete(s[i]);
            }
            i++;
        }
        
        if (mp.size === k) {
            ans = Math.max(ans, j - i + 1);
        }
        
        j++;
    }
    
    return ans;
    }
}



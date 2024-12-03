//Given a string s, you need to print the size of the longest possible substring with exactly k unique characters. If no possible substring exists,
// print -1.

Examples:

Input: s = "aabacbebebe", k = 3
Output: 7
Explanation:// "cbebebe" is the longest substring with 3 distinct characters.
Input: s = "aaaa", k = 2
Output: -1
Explanation:// There's no substring with 2 distinct characters.
Input: s = "aabaaab", k = 2
Output: 7
Explanation:// "aabaaab" is the longest substring with 2 distinct characters.
Constraints
//1 ≤ s.size() ≤ 105
//1 ≤ k ≤ 26
//All characters are lowercase letters

class Solution {
    longestKSubstr(s, k) {
        //code here
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

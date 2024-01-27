//Given a string you need to print the size of the longest possible substring that has exactly K unique characters. If there is no possible 
//substring then print -1.

Input:
S = "aabacbebebe", K = 3
Output: 
7
Explanation: 
"cbebebe"// is the longest substring with 3 distinct characters.

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
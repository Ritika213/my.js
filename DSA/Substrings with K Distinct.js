//Given a string consisting of lowercase characters and an integer k, the task is to count all possible substrings (not necessarily distinct)
//  that have exactly k distinct characters. 

Examples :

Input: s = "abc", k = 2
Output: 2
Explanation: //Possible substrings are ["ab", "bc"]
Input: s = "aba", k = 2
Output: 3
Explanation:// Possible substrings are ["ab", "ba", "aba"]
Input: s = "aa", k = 1
Output: 3
Explanation:// Possible substrings are ["a", "a", "aa"]
Constraints
//1 ≤ s.size() ≤ 106
//1 ≤ k ≤ 26

class Solution {
    countSubstr(s, k) {
        
        let last = Array(26).fill(-1);
    let ts = [];
    let ans = 0;
    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i);
        let v = c.charCodeAt(0) - 97;
        if (last[v] >= 0) {
            ts.splice(ts.indexOf(last[v]), 1);
        }
        last[v] = i;
        ts.push(i);
        let M = ts.length;
        if (M > k) {
            ans += ts[ts.length - k] - ts[ts.length - k - 1];
        } else if (M === k) {
            ans += ts[0] + 1;
        }
    }
    return ans;
    }
}

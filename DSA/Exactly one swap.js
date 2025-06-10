//Given a string s, return the number of distinct strings that can be obtained by exactly one swap of two different indices (i < j).

Examples:

Input: s = "geek"
Output: 6
Explanation:// After one swap, There are only 6 distinct strings possible.(i.e "egek","eegk","geek","geke","gkee" and "keeg") 
Input: s = "aaaa"
Output: 1
Explanation:// Only one distinct string is possible after one swap(i.e "aaaa")
Constraints
//2 ≤ s.size() ≤ 104

class Solution {
    countStrings(s) {
        
         let a = new Array(26).fill(0);
        for (let i = 0; i < s.length; i++) {
            a[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }

        let ans = 0, extra = 0;
        let l = s.length;

        for (let c of a) {
            if (c > 1) extra = 1;
            ans += (l - c) * c;
            l -= c;
        }

        return ans + extra;
    }
}
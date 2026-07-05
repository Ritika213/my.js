//Given a string s consisting of lowercase English letters, find the maximum number of characters between any two
//  identical characters. If no character repeats, return -1.

Examples :

Input: s = "socks"
Output: 3
Explanation:// There are 3 characters between the two occurrences of 's'.
Input: s = "for"
Output: -1
Explanation: //No repeating character present.
Constraints
//1 ≤ |s| ≤ 105

class Solution {
    maxCharGap(s) {
        let n = s.length;

        let index = new Array(26).fill(-1);

        let res = -1;

        for (let i = 0; i < n; i++) {
            let ch = s.charCodeAt(i) - 'a'.charCodeAt(0);

            if (index[ch] === -1) {
                index[ch] = i;
            } else {
                res = Math.max(res, i - index[ch] - 1);
            }
        }

        return res;
    }
}
//Given a string s, find the lexicographically smallest string after rotating the string left any number of
//  times including 0.

Example:

Input: s = "abcd"
Output: "abcd"
Explanation:// String after each rotation are "abcd", "bcda", "cdab", "dabc" and so on. Lexicographically 
//smallest among them is "abcd".
Input: s = "baca"
Output: "abac"
Explanation: //Strings after each rotation are "baca", "acab", "caba", "abac" and so on. Lexicographically
// smallest among them is "abac".
Constraints

//1 ≤ s.size() ≤ 106
//s consists only of lowercase English alphabets


/**
 * @param {string} s
 * @return {string}
 */

class Solution {
    lexiString(s) {
        
        let doubled = s + s;
        let n = doubled.length;
        let f = new Array(n).fill(-1);
        let k = 0;

        for (let j = 1; j < n; j++) {
            let sj = doubled[j];
            let i = f[j - k - 1];

            while (i !== -1 && sj !== doubled[k + i + 1]) {
                if (sj < doubled[k + i + 1]) {
                    k = j - i - 1;
                }
                i = f[i];
            }

            if (sj !== doubled[k + i + 1]) {
                if (sj < doubled[k]) {
                    k = j;
                }
                f[j - k] = -1;
            } else {
                f[j - k] = i + 1;
            }
        }

        return doubled.substring(k, k + s.length);
    }
}
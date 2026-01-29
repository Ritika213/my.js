//Given a string s consisting of only lowercase alphabets, for each index i in the string (0 ≤ i < n), find the first non-repeating 
// character in the prefix s[0..i]. If no such character exists, use '#'.

Examples:

Input: s = "aabc"
Output:// a#bb
Explanation: 
//At i=0 ("a"): First non-repeating character is 'a'.
//At i=1 ("aa"): No non-repeating character, so '#'.
//At i=2 ("aab"): First non-repeating character is 'b'.
//At i=3 ("aabc"): Non-repeating characters are 'b' and 'c'; 'b' appeared first, so 'b'. 
Input: s = "bb" 
Output: "b#" 
Explanation: 
//At i=0 ("b"): First non-repeating character is 'b'.
//At i=1 ("bb"): No non-repeating character, so '#'.
Constraints
//1 ≤ s.size() ≤ 105

/**
 * @param {string} s
 * @return {string}
 */

class Solution {
    firstNonRepeating(s) {
        let n = s.length;
        let q = [];
        let mp = new Map();
        let res = "";

        for (let i = 0; i < n; i++) {
            let ch = s[i];

            // update frequency
            mp.set(ch, (mp.get(ch) || 0) + 1);

            // if first time, push to queue
            if (mp.get(ch) === 1) {
                q.push(ch);
            }

            // remove repeating characters from front
            while (q.length > 0 && mp.get(q[0]) > 1) {
                q.shift();
            }

            // add result
            res += (q.length === 0) ? '#' : q[0];
        }

        return res;
    }
}


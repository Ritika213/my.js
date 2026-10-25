//Given a string s, return the sum of the beauty of all substrings of s. The beauty of a substring is defined 
// as the difference between the maximum and minimum frequencies of the characters present in that substring.

Examples:

Input: s = "aaac"
Output: 3
Explanation:// The substrings with non-zero beauty are "aaac" and "aac". 
//For "aaac", the frequencies are a = 3 and c = 1. Its beauty is 3 − 1 = 2. 
//For "aac", the frequencies are a = 2 and c = 1. Its beauty is 2 − 1 = 1. 
//The remaining substrings have a beauty of 0. Therefore, the sum of the beauties of all substrings is 2 + 1 = 3.
Input: s = "aabc"
Output: 2
Explanation// The substrings with non-zero beauty are "aab" and "aabc". 
//For "aab", the frequencies are a = 2 and b = 1. Its beauty is 2 − 1 = 1. 
//For "aabc", the frequencies are a = 2, b = 1, and c = 1. Its beauty is 2 − 1 = 1. 
//Therefore, the sum of the beauties of all substrings is 1 + 1 = 2.
//Constraints:

//1 ≤ s.size() ≤ 500
//s consists only of lowercase English alphabets


/**
 * @param {string} s
 * @return {number}
 */

class Solution {
    beautySum(s) {
        // code here
        let ans = 0;
        let n = s.length;

        for (let i = 0; i < n; i++) {
            let freq = new Array(26).fill(0);

            for (let j = i; j < n; j++) {
                freq[s.charCodeAt(j) - 'a'.charCodeAt(0)]++;

                let mx = 0;
                let mn = Infinity;

                for (let k = 0; k < 26; k++) {
                    if (freq[k] > 0) {
                        mx = Math.max(mx, freq[k]);
                        mn = Math.min(mn, freq[k]);
                    }
                }

                ans += mx - mn;
            }
        }

        return ans;
    }
}
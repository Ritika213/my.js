//Given a binary string s consists only of 0s and 1s. Calculate the number of substrings that have more 1s than 0s.

Examples:

Input: s = "011"
Output: 4
Explanation: //There are 4 substring which has more 1s than 0s. i.e "011","1","11" and "1"
Input: s = "0000"
Output: 0
Explanation: //There is no substring with more 1s than 0s
Constraints
//1 < |s| <  6 * 104

class Solution {
    countSubstring(s) {
        
       let n = s.length;

        let offset = n;
        let freq = new Array(2 * n + 1).fill(0);

        freq[offset] = 1;

        let prefix = 0;
        let smaller = 0;
        let answer = 0;

        for (let ch of s) {
            if (ch === '1') {
                smaller += freq[prefix + offset];
                prefix++;
            } else {
                smaller -= freq[prefix - 1 + offset];
                prefix--;
            }

            answer += smaller;
            freq[prefix + offset]++;
        }

        return answer; 
    }
};
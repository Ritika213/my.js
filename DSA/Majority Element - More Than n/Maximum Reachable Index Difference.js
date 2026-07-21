//Given a string s containing lowercase English alphabets.

//Start from any index containing the character 'a' and perform jump operations.
//In each jump operation, move to any index on the right side whose character is the immediate next letter of the 
// current character in the alphabet (i.e., 'a' to 'b', 'b' to 'c', 'c' to 'd', and so on). 
//Continue performing jumps until no further jump is possible.
//Find the maximum possible difference between the starting index and the ending index. If it is not possible
//  to choose a starting index, return -1.

Examples :

Input: s = "aaabcb"
Output: 5
Explanation:// Start at index 0 ('a'), jump to index 5 ('b'). Difference = 5 - 0 = 5.
Input: s = "xynjir"
Output: -1
Explanation: //The string does not contain any character 'a'. So, the answer is -1.
Input: s = "abcbzzd"
Output: 6
Explanation: //Start from index 0 ('a'). Jump to index 1 ('b') because 'b' is the next alphabet character. Jump 
//to index 2 ('c') because 'c' is the next character after 'b'. Jump to index 6 ('d') because 'd' is the next
//  character after 'c'.
Constraints
//1 ≤ s.size() ≤ 105


class Solution {
    maxIndexDifference(s) {
        let maxi = 0;
        let k = -1;

        for (let i = 0; i < s.length; i++) {
            if (s[i] === 'a') {
                k = i;
                break;
            }
        }

        if (k === -1) {
            return -1;
        }

        let l = -1;

        for (let i = k + 1; i < s.length; i++) {
            if (s[i] === 'a') continue;

            let a = s.charCodeAt(i) - 'a'.charCodeAt(0);

            if (maxi >= a - 1) {
                l = i;
                maxi = Math.max(maxi, a);
            }
        }

        if (l === -1) {
            return 0;
        }

        return l - k;
    }
}
//Given two strings s1 and s2, return the length of their longest common subsequence (LCS). If there is no common subsequence, return 0.

//A subsequence is a sequence that can be derived from the given string by deleting some or no elements without changing the order of the 
//remaining elements. For example, "ABE" is a subsequence of "ABCDE".

Examples:

Input: s1 = "ABCDGH", s2 = "AEDFHR"
Output: 3
Explanation:// The longest common subsequence of "ABCDGH" and "AEDFHR" is "ADH", which has a length of 3.
Input: s1 = "ABC", s2 = "AC"
Output: 2
Explanation// The longest common subsequence of "ABC" and "AC" is "AC", which has a length of 2.
Input: s1 = "XYZW", s2 = "XYWZ"
Output: 3
Explanation:// The longest common subsequences of "XYZW" and "XYWZ" are "XYZ" and "XYW", both of length 3.
Constraints:
1<= s1.size(), s2.size() <=103
//Both strings s1 and s2 contain only uppercase English letters.

class Solution {
    lcs(s1, s2) {
        
           let l1 = s1.length;
        let l2 = s2.length;

        // Properly initialize a 2D array
        let arr = new Array(l1 + 1).fill(0).map(() => new Array(l2 + 1).fill(0));

        for (let i = 1; i <= l1; i++) {
            for (let j = 1; j <= l2; j++) {
                if (s1[i - 1] === s2[j - 1]) {
                    arr[i][j] = arr[i - 1][j - 1] + 1;
                } else {
                    arr[i][j] = Math.max(arr[i - 1][j], arr[i][j - 1]);
                }
            }
        }

        return arr[l1][l2];
    }
}

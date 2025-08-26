//Given two strings s1 and s2. You have to check that s1 is a subsequence of s2 or not.
Note:// A subsequence is a sequence that can be derived from another sequence by deleting some elements without changing the order
// of the remaining elements.

Examples:

Input: s1 = "AXY", s2 = "YADXCP"
Output: false
Explanation:// s1 is not a subsequence of s2 as 'Y' appears before 'A'.
Input: s1 = "gksrek", s2 = "geeksforgeeks"
Output: true
Explanation:// If we combine the bold character of "geeksforgeeks", it equals to s1. So s1 is a subsequence of s2. 
Constraints
//1 ≤ s1.size(), s2.size() ≤ 106

class Solution {
    isSubSeq(s1, s2) {
        
          let i=0,j=0,n=s1.length,m=s2.length;
        while(i<n && j<m)
        {
            if(s1[i]===s2[j]) i++,j++;
            else j++;
        }
        return i===n;
    }
}
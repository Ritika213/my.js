//Given two strings, one is a text string txt and the other is a pattern string pat. The task is to print the indexes of all the occurrences 
//of the pattern string in the text string. Use 0-based indexing while returning the indices. 
Note:// Return an empty list in case of no occurrences of pattern.

Examples :

Input: txt = "abcab", pat = "ab"
Output: [0, 3]
Explanation:// The string "ab" occurs twice in txt, one starts at index 0 and the other at index 3. 
Input: txt = "abesdu", pat = "edu"
Output: []
Explanation:// There's no substring "edu" present in txt.
Input: txt = "aabaacaadaabaaba", pat = "aaba"
Output: [0, 9, 12]

Constraints
//1 ≤ txt.size() ≤ 106
//1 ≤ pat.size() < txt.size()
//Both the strings consist of lowercase English alphabets.


class Solution {

    search(pat, txt) {
        
     let n = txt.length;
    let m = pat.length;
    let ans = [];

    if (n < m) {
        return [-1];
    }

    for (let i = 0; i <= n - m; i++) {
        if (txt[i] === pat[0] && txt.substring(i, i + m) === pat) {
            ans.push(i);
        }
    }

    return ans;
    
    }
}
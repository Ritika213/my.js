//Given a string s of lowercase English alphabets, your task is to return the maximum number of substrings formed, after possible partitions 
//(probably zero)of s such that no two substrings have a common character.

Examples:

Input: s = "acbbcc"
Output: 2
Explanation:// "a" and "cbbcc" are two substrings that do not share any characters between them.
Input: s = "ababcbacadefegdehijhklij"
Output: 3
Explanation// Partitioning at the index 8 and at 15 produces three substrings: “ababcbaca”, “defegde”, and “hijhklij” such that none 
//of them have a common character. So, the maximum number of substrings formed is 3.

Input: s = "aaa"
Output: 1
Explanation:// Since the string consists of same characters, no further partition can be performed. Hence, the number of substring 
//(here the whole string is considered as the substring) is 1.
Constraints
//1 ≤ s.size() ≤ 105
//'a' ≤ s[i] ≤ 'z' 

class Solution {
    maxPartitions(s) {
        
       let n = s.length;
        let idx = new Array(26).fill(-1);

        // हर अक्षर का आखिरी इंडेक्स स्टोर करो
        for (let i = n - 1; i >= 0; i--) {
            let charIdx = s.charCodeAt(i) - 97; // 'a' की ASCII वैल्यू = 97
            if (idx[charIdx] === -1) idx[charIdx] = i;
        }
     let i = 0, j = 0;
        let count = 0;

        while (i < n) {
            let end = idx[s.charCodeAt(i) - 97];

            while (j <= end) { 
                end = Math.max(end, idx[s.charCodeAt(j) - 97]);
                j++;
            }

            i = j; // अगले हिस्से के लिए स्टार्ट पॉइंट
            count++;
        }

        return count; 
    }
}
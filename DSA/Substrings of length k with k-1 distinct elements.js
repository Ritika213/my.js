//Given a string s consisting only lowercase alphabets and an integer k. Find the count of all substrings of length k which have 
//exactly k-1 distinct characters.

Examples:

Input: s = "abcc", k = 2
Output: 1
Explaination:// Possible substring of length k = 2 are,
ab :// 2 distinct characters
bc :// 2 distinct characters
cc :// 1 distinct characters
//Only one valid substring so, count is equal to 1.
Input: "aabab", k = 3
Output: 3
Explaination: //Possible substring of length k = 3 are, 
aab :// 2 distinct charcters
aba :// 2 distinct characters
bab :// 2 distinct characters
//All these substring are valid so, the total count is equal to 3.
Constrains
//1 ≤ s.size() ≤ 105
//2 ≤ k ≤ 27

class Solution {
    substrCount(s, k) {
        
        if (s.length < k) return 0;

        let count = 0;
        let freq = new Array(26).fill(0);
        let distinct = 0;

        for (let i = 0; i < s.length; i++) {
            let idxAdd = s.charCodeAt(i) - 97;
            if (freq[idxAdd] === 0) distinct++;
            freq[idxAdd]++;

            if (i >= k) {
                let idxRemove = s.charCodeAt(i - k) - 97;
                freq[idxRemove]--;
                if (freq[idxRemove] === 0) distinct--;
            }

            if (i >= k - 1 && distinct === k - 1) {
                count++;
            }
        }
        return count;
    }
}
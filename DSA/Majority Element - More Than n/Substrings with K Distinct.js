//given a string s consisting of lowercase characters and an integer k, You have to count all possible substrings that have exactly k
//  distinct characters.

Examples :

Input: s = "abc", k = 2
Output: 2
Explanation:// Possible substrings are ["ab", "bc"]
Input: s = "aba", k = 2
Output: 3
Explanation:// Possible substrings are ["ab", "ba", "aba"]
Input: s = "aa", k = 1
Output: 3
Explanation:// Possible substrings are ["a", "a", "aa"]
Constraints
//1 ≤ s.size() ≤ 106
//1 ≤ k ≤ 26


/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

class Solution {
    countSubstr(s, k) {
        
        return this.atMostK(s,k) - this.atMostK(s,k-1)
    }
    atMostK(s,k){
        
        let freq = Array(26).fill(0)
        let left = 0, distinct=0, ans=0;
        for(let right=0; right<s.length;right++){
            let idx= s.charCodeAt(right) - 97;
            if(freq[idx] ===0) distinct++;
            freq[idx]++;
            while(distinct >k){
                let lidx= s.charCodeAt(left) - 97;
                freq[lidx]--;
                if(freq[lidx]===0) distinct--;
                left++;
            }
            ans += right- left+1;
        }
        return ans;
        }
}

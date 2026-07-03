//Given a string s consisting only of characters a, b and c.

//Return the number of substrings containing at least one occurrence of all these characters a, b and c.

 

//Example 1:

Input: s = "abcabc"
Output: 10
Explanation: //The substrings containing at least one occurrence of the characters a, b and c are "abc", "abca",
// "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again). 
//Example 2:

Input: s = "aaacb"
Output: 3
Explanation:// The substrings containing at least one occurrence of the characters a, b and c are "aaacb", "aacb"
// and "acb". 
//Example 3:

Input: s = "abc"
Output: 1
Constraints

//3 <= s.length <= 5 x 10^4
//s only consists of a, b or c characters.

var numberOfSubstrings = function(s) {
  const n = s.length;
    const ltrs = new Map();
    let subs = 0;
    let left = 0;
    
    for (let right = 0; right < n; right++) {
        ltrs.set(s[right], (ltrs.get(s[right]) || 0) + 1);
        while (ltrs.size === 3) {
            subs += n - right;
            ltrs.set(s[left], ltrs.get(s[left]) - 1);
            if (ltrs.get(s[left]) === 0) { ltrs.delete(s[left]); }
            left++;
        }
    }
    return subs;      
};
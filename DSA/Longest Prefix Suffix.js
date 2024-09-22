//Given a string of characters, find the length of the longest proper prefix which is also a proper suffix.

NOTE: //Prefix and suffix can be overlapping but they should not be equal to the entire string.

Examples :

Input: str = "abab"
Output: 2
Explanation:// "ab" is the longest proper prefix and suffix. 
Input: str = "aaaa"
Output: 3
Explanation: //"aaa" is the longest proper prefix and suffix. 
//Expected Time Complexity: O(|str|)
//Expected Auxiliary Space: O(|str|)

Constraints
//1 ≤ |str| ≤ 106
//str contains lower case English alphabets

class Solution {
    lps(s) {
        
        const n = s.length;
  const lps = Array(n).fill(0);
  let i = 1;
  let j = 0;

  while (i < n) {
    if (s[i] === s[j]) {
      j++;
      lps[i] = j;
      i++;
    } else {
      if (j > 0) {
        j = lps[j - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }

  return lps[n - 1];
     
    }
}

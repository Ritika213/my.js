//Given a string s, find the length of the longest substring with all distinct characters. 

Examples:

Input: s = "geeksforgeeks"
Output: 7
Explanation:// "eksforg" is the longest substring with all distinct characters.
Input: s = "aaa"
Output: 1
Explanation:// "a" is the longest substring with all distinct characters.
Input: s = "abcdefabcbb"
Output: 6
Explanation// The longest substring with all distinct characters is "abcdef", which has a length of 6.

Constraints:
1<= s.size()<=3*104
//All the characters are in lowercase.

class Solution {
    longestUniqueSubstr(s) {
        
        let maxLength = 0;
  let charMap = new Map();
  let start = 0;

  for (let end = 0; end < s.length; end++) {
    const currentChar = s[end];

    if (charMap.has(currentChar) && charMap.get(currentChar) >= start) {
      start = charMap.get(currentChar) + 1;
    }

    charMap.set(currentChar, end);

    const currentLength = end - start + 1;
    maxLength = Math.max(maxLength, currentLength);
  }

  return maxLength;


    }
}
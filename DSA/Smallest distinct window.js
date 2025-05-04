//Given a string str, your task is to find the length of the smallest window that contains all the characters of the given string at least once.

Example:

Input: str = "aabcbcdbca"
Output: 4
Explanation:// Sub-String "dbca" has the smallest length that contains all the characters of str.
Input: str = "aaab"
Output: 2
Explanation:// Sub-String "ab" has the smallest length that contains all the characters of str.
Input: str = "geeksforgeeks"
Output: 8
Explanation:// There are multiple substring with smallest length that contains all characters of str, "geeksfor" and "forgeeks". 
Constraints

//1 ≤ str.size() ≤ 105
//str contains only lower-case english alphabets.

class Solution {
    findSubString(str) {
        // code here
         let uniqueChars = new Set(str);
  let distinctChars = uniqueChars.size;
  let charCount = new Map();
  let start = 0;
  let minLength = Number.MAX_SAFE_INTEGER;
  let count = 0;

  for (let end = 0; end < str.length; end++) {
    if (!charCount.has(str[end])) {
      charCount.set(str[end], 0);
    }
    charCount.set(str[end], charCount.get(str[end]) + 1);

    if (charCount.get(str[end]) === 1) {
      count++;
    }

    while (count === distinctChars) {
      minLength = Math.min(minLength, end - start + 1);
      charCount.set(str[start], charCount.get(str[start]) - 1);

      if (charCount.get(str[start]) === 0) {
        count--;
      }

      start++;
    }
  }
     return minLength === Number.MAX_SAFE_INTEGER ? 0 : minLength;

    }
}
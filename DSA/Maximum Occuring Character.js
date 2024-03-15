//Given a string str of lowercase alphabets. The task is to find the maximum occurring character in the string str. If more than one character 
//occurs the maximum number of time then print the lexicographically smaller character.



Input:
str = testsample
Output: e
Explanation //e is the character which is having the highest frequency.

class Solution 
{
    //Function to find the maximum occurring character in a string.
    getMaxOccuringChar(str)
    {
        // code here
       const charCount = {};

  // Count the occurrences of each character
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the maximum occurring character
  let maxChar = str[0];
  for (let char in charCount) {
    if (charCount[char] > charCount[maxChar]) {
      maxChar = char;
    } else if (charCount[char] === charCount[maxChar] && char < maxChar) {
      maxChar = char;
    }
  }

  return maxChar;
}
}
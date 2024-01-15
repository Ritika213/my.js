//Given a string S consisting of lowercase Latin Letters. Return the first non-repeating character in S. If there is no non-repeating character,
// return '$'.


Input:
S = hello
Output: h
Explanation //In the given string, the first character which is non-repeating is h, as it appears first and there is no other 'h' in the string.

class Solution 
{
    //Function to find the first non-repeating character in a string.
    nonrepeatingCharacter(s)
    {
        
    for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (s.indexOf(char) == i && s.indexOf(char, i + 1) == -1) {
      return char;
    }
  }
  return "$";

       
    }


    }
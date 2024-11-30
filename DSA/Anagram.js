//Given two strings s1 and s2 consisting of lowercase characters. The task is to check whether two given strings are an anagram 
//of each other or not. An anagram of a string is another string that contains the same characters, only the order of characters can be 
//different. For example, act and tac are an anagram of each other. Strings s1 and s2 can only contain lowercase alphabets.

Note:// You can assume both the strings s1 & s2 are non-empty.

Examples :

Input: s1 = "geeks", s2 = "kseeg"
Output: true
Explanation: //Both the string have same characters with same frequency. So, they are anagrams.
Input: s1 = "allergy", s2 = "allergic"
Output: false
Explanation// Characters in both the strings are not same, so they are not anagrams.

Input: s1 = "g", s2 = "g"
Output: true
Explanation:// Character in both the strings are same, so they are anagrams.
Constraints
//1 ≤ s1.size(), s2.size() ≤ 105

class Solution {
    // Function is to check whether two strings are anagram of each other or not.
    areAnagrams(s1, s2) {
        
     // If lengths of strings are not equal, they cannot be anagrams.
        if (s1.length !== s2.length) {
            return false;
        }
        
        // Convert strings to character arrays, sort them, and compare.
        let charArray1 = s1.split('').sort();
        let charArray2 = s2.split('').sort();
        
        // Compare sorted arrays.
        return charArray1.join('') === charArray2.join('');
    
    }
}


//Given a string s, determine whether its characters can be rearranged to form a palindrome. Return true if it is possible to rearrange
//  the string into a palindrome; otherwise, return false.

Examples

Input: s = "baba"
Output: true
Explanation: //Can be rearranged to form a palindrome "abba" 
Input: s = "geeksogeeks"
Output: true
Explanation:// The characters of the string can be rearranged to form the palindrome "geeksoskeeg".
Input: s = "geeksforgeeks"
Output: false
Explanation:// The given string can't be converted into a palindrome.
Constraints
//1 ≤ s.length ≤ 106
//s consists of only lowercase English letters.

class Solution {
    canFormPalindrome(s) {
        
         let mask = 0;

        for (let c of s) {
            let bit = 1 << (c.charCodeAt(0) - 'a'.charCodeAt(0));
            mask ^= bit;
        }

        return (mask & (mask - 1)) === 0;
    }
}
//given a string s consisting only of the characters '(' and ')'. Your task is to determine the minimum number of parentheses 
// (either '(' or ')') that must be inserted at any positions to make the string s a valid parentheses string.

//A parentheses string is considered valid if:

//Every opening parenthesis '(' has a corresponding closing parenthesis ')'.
//Every closing parenthesis ')' has a corresponding opening parenthesis '('.
//Parentheses are properly nested.
Examples:

Input: s = "(()("
Output: 2
Explanation:// There are two unmatched '(' at the end, so we need to add two ')' to make the string valid.
Input: s = ")))"
Output: 3
Explanation:// Three '(' need to be added at the start to make the string valid.
Input: s = ")()()"
Output: 1 
Explanation:// The very first ')' is unmatched, so we need to add one '(' at the beginning.
Constraints
//1 ≤ s.size() ≤ 105
//s[i] ∈ { '(' , ')' }

class Solution {
    minParentheses(s) {
        
       let st=[];
        let c = 0;

         for (let a of s) {
            if (a === '(') {
                st.push(a);
            } else { 
                if (st.length > 0 && st[st.length - 1] === '(') {
                    st.pop(); 
                } else {
                    c++;
                }
            }
        }
        return c + st.length;  
    }
}
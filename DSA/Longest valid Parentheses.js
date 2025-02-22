//Given a string s consisting of opening and closing parenthesis '(' and ')'. Find the length of the longest valid parenthesis substring.

//A parenthesis string is valid if:

//For every opening parenthesis, there is a closing parenthesis.
//The closing parenthesis must be after its opening parenthesis.
Examples :

Input: s = "((()"
Output: 2
Explanation:// The longest valid parenthesis substring is "()".
Input: s = ")()())"
Output: 4
Explanation// The longest valid parenthesis substring is "()()".

Input: s = "())()"
Output: 2
Explanation:// The longest valid parenthesis substring is "()".
Constraints
//1 ≤ s.size() ≤ 106  
//s consists of '(' and ')' only


class Solution {
    maxLength(s) {
        
         let st = [];
    let pt = [];
    st.push('#');
    pt.push(-1);
    let maxVal = 0;
    let n = s.length;

    for (let i = 0; i < n; i++) {
      if (s[i] === ')' && st.length && st[st.length - 1] === '(') {
        st.pop();
        pt.pop();
        maxVal = Math.max(maxVal, i - pt[pt.length - 1]);
      } else {
        st.push(s[i]);
        pt.push(i);
      }
    }

    return maxVal;
    
    }
}
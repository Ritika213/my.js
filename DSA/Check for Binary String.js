//Given a non-empty sequence of characters s, return true if sequence is Binary, else return false.

Examples:

Input: s = "101"
Output: true
Explanation: //Since string contains only '0' and '1', output is true.
Input: s = "75"
Output: false
Explanation:// Since string contains digits other than '0' and '1', output is false.
Constraints:
1 <= s.size() <= 105

class Solution{
    isBinary(str){
        
      for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (char !== '0' && char !== '1') {
      return false;
    }
  }
  return true;

    }
}
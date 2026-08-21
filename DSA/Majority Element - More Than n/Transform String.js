//Given two strings s1 and s2. Find the minimum number of steps required to transform string s1 into string s2.
//  The only allowed operation for the transformation is selecting a character from string s1 and inserting it
//  in the beginning of string s1.

//If transformation is not possible return -1.

Examples:

Input: s1 = "abd", s2 = "bad"
Output: 1
Explanation: //The conversion can take place in 1 operation: Pick 'b' and place it at the front.
Input: s1 = "GeeksForGeeks", s2 = "ForGeeksGeeks"
Output: 3
Explanation:// The conversion can take place in 3 operations: 
//Pick 'r' and place it at the front.
s1 = "rGeeksFoGeeks"
//Pick 'o' and place it at the front.
s1 = "orGeeksFGeeks"
//Pick 'F' and place it at the front.
s1 = "ForGeeksGeeks"

Constraints:
1<= s1.length(), s2.length() <= 104




/**
 * @param {String} A
 * @param {String} B
 * @returns {number}
*/

class Solution{
    transform(A, B){
    
         let steps = 0;

  if (A.length !== B.length) {
    return -1;
  }

  const n = A.length;
  const m = new Map();

  for (let i = 0; i < n; i++) {
    m.set(A[i], (m.get(A[i]) || 0) + 1);
    m.set(B[i], (m.get(B[i]) || 0) - 1);
  }

  for (let [key, value] of m) {
    if (value !== 0) {
      return -1;
    }
  }

  for (let i = n - 1, j = n - 1; i >= 0; i--, j--) {
    while (i >= 0 && A[i] !== B[j]) {
      i--;
      steps++;
    }
  }

  return steps;
}

}
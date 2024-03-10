//Given a string str which may contains lowercase and uppercase chracters. The task is to remove all duplicate characters from the string
// and find the resultant string. The order of remaining characters in the output should be same as in the original string.

//Example 1:

Input:
str = "geEksforGEeks"
Output: 
"geEksforG"
Explanation 
//After removing duplicate characters such as E, e, k, s, we have string as "geEksforG".

//Example 2:

Input:
str = "HaPpyNewYear"
Output: 
"HaPpyNewYr"
Explanation: 
//After removing duplicate characters such as e, a, we have string as "HaPpyNewYr".
 Task
//Complete the function removeDuplicates() which takes a string str, as input parameters and returns a string denoting the answer. You don't
// have to print answer or take inputs.

//Expected Time Complexity: O(N)
//Expected Auxiliary Space: O(N)

Constraints
//1 ≤ N ≤ 105
//String contains uppercase and lowercase english letters.

class Solution {
    removeDuplicates(str){
     
      let result = '';
  let seen = new Set();

  for (let ch of str) {
    if (!seen.has(ch)) {
      result += ch;
      seen.add(ch);
    }
  }

  return result;

    }
    }


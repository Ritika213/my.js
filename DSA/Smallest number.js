//Given two integers s and d. The task is to find the smallest number such that the sum of its digits is s and the number of digits in the 
//number are d. Return a string that is the smallest possible number. If it is not possible then return -1.

Examples:

Input: s = 9, d = 2
Output: 18 
Explanation:// 18 is the smallest number possible with the sum of digits = 9 and total digits = 2.
Input: s = 20, d = 3 
Output: 299 
Explanation:// 299 is the smallest number possible with the sum of digits = 20 and total digits = 3.
//Expected Time Complexity: O(d)
//Expected Auxiliary Space: O(1)

Constraints
//1 ≤ s ≤ 100
//1 ≤ d ≤ 6


class Solution {
    /**
    * @param number s
    * @param number d

    * @returns string
    */
    smallestNumber(s, d) {
        
          if (s > 9 * d) {
            return "-1";
        }

        let st = "";
        for (let i = d - 1; i >= 0; i--) {
            for (let j = 9; j >= 0; j--) {
                if (i != 0) {
                    if (s - j > 0) {
                        st += j;
                        s = s - j;
                        break;
                    }
                } else {
                    st += s;
                    break;
                }
            }
        }
        
        return st.split("").reverse().join("");
    }
}

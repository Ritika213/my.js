//Given two binary strings s1 and s2 consisting of only 0s and 1s. Find the resultant string after adding the two Binary Strings.
Note:// The input strings may contain leading zeros but the output string should not have any leading zeros.

Input: s1 = "1101", s2 = "111"
Output: 10100
Explanation:
 1101
+ 111
10100
Input: s1 = "00100", s2 = "010"
Output: 110
Explanation: 
  100
+  10
  110

  Constraints
//1 ≤s1.size(), s2.size()≤ 106

class Solution {
    addBinary(s1, s2) {
        // code here
        let ans = "";
        let n = s1.length - 1;
        let m = s2.length - 1;
        let carry = "0";

        // Traverse both strings from the end
        while (n >= 0 || m >= 0) {
            let bit1 = n >= 0 ? s1[n] : "0";
            let bit2 = m >= 0 ? s2[m] : "0";

            // Binary addition logic
            if (bit1 === "1" && bit2 === "1") {
                ans = (carry === "1" ? "1" : "0") + ans;
                carry = "1";
            } else if (bit1 === "0" && bit2 === "0") {
                ans = (carry === "1" ? "1" : "0") + ans;
                carry = "0";
            } else {
                ans = (carry === "1" ? "0" : "1") + ans;
            }
             n--;
            m--;
        }

        // If there's a leftover carry
        if (carry === "1") {
            ans = "1" + ans;
        }

        // Return the result without leading zeros
        return ans.replace(/^0+/, "") || "0";
    
    }
}
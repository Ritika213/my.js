//Given two numbers as strings s1 and s2. Calculate their Product.
Note:// The numbers can be negative and You are not allowed to use any built-in function or convert the strings to integers. There 
//can be zeros in the begining of the numbers. You don't need to specify '+' sign in the begining of positive numbers.

Examples:

Input: s1 = "0033", s2 = "2"
Output: "66"
Explanation:// 33 * 2 = 66
Input: s1 = "11", s2 = "23"
Output: "253"
Explanation:// 11 * 23  = 253
Input: s1 = "123", s2 = "0"
Output: "0"
Explanation:// Anything multiplied by 0 is equal to 0.
Constraints
//1 ≤ s1.size() ≤ 103
//1 ≤ s2.size() ≤ 103

class Solution {
    multiplyStrings(s1, s2) {
        
         if (s1 === "0" || s2 === "0") {
            return "0";
        }

        // Convert the strings to BigInt
        let num1 = BigInt(s1);
        let num2 = BigInt(s2);

        // Multiply the BigInts
        let result = num1 * num2;

        // Return the result as a string
        return result.toString();
    }
}
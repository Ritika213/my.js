//Given an integer s represented as a string, the task is to get the sum of all possible sub-strings of this string.
//As the answer will be large, return answer modulo 109+7. 

Note: //The number may have leading zeros.

//Example 1:

Input:
s = "1234"
Output: 
1670
Explanation: 
Sum = 1 + 2 + 3 + 4 + 12 + 23 + 34 + 123 + 234 + 1234 //= 1670

//Example 2:

Input:
s = "421"
Output: 
491
Explanation: 
Sum = 4 + 2 + 1 + 42 + 21 + 91 + 421 //= 491
 Task:
//You only need to complete the function sumSubstrings that takes s as an argument and returns the answer modulo 109+7.

//Expected Time Complexity: O(|s|).
//Expected Auxiliary Space: O(|s|).

Constraints
//1 <= |s| <= 105

class Solution
{
    //Function to find sum of all possible substrings of the given string.
    sumSubstrings(s)
    {
        // code here
        let modulo = 1000000007;
        let n = s.length;
        let result = 0;
        let multiplier = 1; 
        for (let i = n - 1; i >= 0; i--) {
            let digit = s.charAt(i) - '0'; 
            result = (result + (digit * multiplier * (i + 1)) % modulo) % modulo;
            multiplier = (multiplier * 10 + 1) % modulo; 
        }
        return result;
    }
}
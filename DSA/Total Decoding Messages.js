//A message containing letters A-Z is being encoded to numbers using the following mapping:

//'A' -> 1
//'B' -> 2
//...
//'Z' -> 26

//given a string digits. You have to determine the total number of ways that message can be decoded.

Examples:

Input: digits = "123"
Output: 3
Explanation// "123" can be decoded as "ABC"(1, 2, 3), "LC"(12, 3) and "AW"(1, 23).
Input: digits = "90"
Output: 0
Explanation: //"90" cannot be decoded, as it's an invalid string and we cannot decode '0'.
Input: digits = "05"
Output: 0
Explanation: //"05" cannot be mapped to "E" because of the leading zero ("5" is different from "05"), the string is not a valid encoding 
// message.
Constraints
//1 ≤ digits.size() ≤ 103


class Solution {
    countWays(digits) {
        
       let mod = 1e9 + 7, n = digits.length;
		    let prev1 = 1, prev2 = 1;
		    for(let i = 2; i <= n; i++) {
		        let curr = 0;
		        if(digits[i - 1] != '0') 
		            curr = prev1;
		      if((digits[i - 2] === '1') || (digits[i - 2] === '2' && digits[i - 1] <= '6'))
		            curr = (curr + prev2) % mod;
		        prev2 = prev1;
		        prev1 = curr;
		    }
		    return prev1; 
    }
}

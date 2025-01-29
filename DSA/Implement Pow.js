//Implement the function power(b, e), which calculates b raised to the power of e (i.e. be).

Examples:

Input: b = 3.00000, e = 5
Output: 243.00000
Input: b = 0.55000, e = 3
Output: 0.16638
Input: b = -0.67000, e = -7
Output: -16.49971
Constraints:

-100.0 < b < 100.0
-109 <= e <= 109
//Either b is not zero or e > 0.
-104 <= be <= 104


class Solution {
    /**
     * Computes b raised to the power e recursively.
     * @param {number} b - The base.
     * @param {number} e - The exponent.
     * @returns {number} - The result of b^e.
     */
    power(b, e) {
        
        let result = 1.0;
        let exp = e;
        if(exp <0){
            exp = -exp;
            b=1.0/b;
        }
        while(exp >0){
            if(exp%2===1){
                result *=b;
            }
            b*=b;
            exp=Math.floor(exp/2);
        }
        return result;
    }
}
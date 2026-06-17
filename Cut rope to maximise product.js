//Given a rope of length n meters, cut it into multiple smaller ropes such that the product of their lengths
//  is maximized. At least one cut is mandatory.

Examples:

Input: n = 2
Output: 1
Explanation: //Since 1 cut is mandatory. Maximum obtainable product is 1 * 1 = 1.
Input: n = 5
Output: 6
Explanation:// Maximum obtainable product is 2 * 3 = 6.
Constraints
//2 ≤ n ≤ 58

class Solution {
    maxProduct(n) {
        
        if (n === 2) return 1;
        if (n === 3) return 2;

        let q = Math.floor(n / 3);
        let r = n % 3;

        if (r === 0)
            return Math.pow(3, q);

        if (r === 1)
            return Math.pow(3, q - 1) * 4;

        return Math.pow(3, q) * 2; // r === 2 
    }
}
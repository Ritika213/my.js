//Given a non-negative integer n, you can only change a set bit (1) to an unset bit (0). Find the maximum
//  possible value of n such that its binary representation does not contain three consecutive set bits (111)
//  after performing zero or more allowed operations.

Examples:

Input: n = 2
Output: 2
Explanation:// The binary representation of 2 is 10, which does not contain three consecutive set bits.
// Therefore, no change is required.
Input: n = 7
Output: 6
Explanation:// The binary representation of 7 is 111, which contains three consecutive set bits. Changing 
//the rightmost set bit to 0 gives: 111 -> 110. Thus, the maximum possible value is 6.
Constraints

//0 ≤ n ≤ 109


/**
 * @param {number} n
 * @return {number}
 */

class Solution {
    maxValue(n) {
        
        for(let i = 30; i>=2; i--)
               {
                   let mask1 = 1<<i;
                   let mask2 = 1<<(i-1);
                   let mask3 = 1<<(i-2);

                   if((mask1&n) && (mask2&n) && (mask3&n)){
                       n = (n^mask3);
                   }
               }
               return n;
    }
}

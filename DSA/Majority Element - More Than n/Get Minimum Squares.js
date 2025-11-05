//Given a positive integer n, find the minimum number of perfect squares (square of an integer) that sum up to n.

Note: //Every positive integer can be expressed as a sum of square numbers since 1 is a perfect square, and any number can be 
//represented as 1*1 + 1*1 + 1*1 + ....

Examples:

Input: n = 100
Output: 1
Explanation:// 10 * 10 = 100
Input: n = 6
Output: 3
//Explanation = 1 * 1 + 1 * 1 + 2 * 2 = 6 
Constraints
//1 ≤ n ≤ 104


/**
 * @param {number} n
 * @returns {number}
 */

class Solution {
    minSquares(n) {
        
         let dp=new Array(n+1).fill(0);
        for(let i=1;i<=n;i++){
            dp[i]=i;
        }
        for(let i=1;i<=n;i++){
            for(let j=1;j*j<=i;j++){
                let sq=j*j;
                dp[i]=Math.min(dp[i],1+dp[i-sq]);
            }
        }
        return dp[n];
    }
}
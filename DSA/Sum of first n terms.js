//Given an integer n, calculate the sum of series 13 + 23 + 33 + 43 + … till n-th term.

Examples:

Input: n = 5
Output: 225
Explanation:// 13 + 23 + 33 + 43 + 53 = 225
Input: n = 7
Output: 784
Explanation:// 13 + 23 + 33 + 43 + 53 + 63 + 73 = 784
//Expected Time Complexity: O(1)
//Expected Auxillary Space: O(1)

Constraints:
1 <= n <= 5 * 104 

class Solution {
    /**
    * @param number n
    
    * @returns number
    */
        sumOfSeries(n) {
            // code here
            let sum =0;
            for(let i=0;i<=N;i++){
                sum+=i;
            }
            return sum*sum;
        }
    }
            
    
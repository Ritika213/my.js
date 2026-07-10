//Given a number n, find the number of ways to represent this number as a sum of 2 or more consecutive natural numbers.

Examples:

Input: n = 10
Output: 1
Explanation: //There is only one way, 10 = 1+2+3+4.
Input: n = 15
Output: 3
Explanation: //There are 3 ways, (15 = 1+2+3+4+5), (15 = 4+5+6) and (15 = 7+8).
Constraints
//1 ≤ n ≤ 108

class Solution {
    getCount(n) {
        // code here
       let ans = 0;
        let lastRemoved = 1;
        let sum = 0;

        // Consecutive for more than half's sum will always be more than n
        let check = Math.floor(n / 2);

        // Odd and not equal to 1
        if ((n & 1) && n !== 1) {
            check++;
        }

        // Sliding window of variable size
        for (let i = 1; i <= check; i++) {
            sum += i;

            while (sum >= n) {
                if (sum === n) {
                    ans++;
                }

                sum -= lastRemoved;
                lastRemoved++;
            }
        }

        return ans; 
    }
}
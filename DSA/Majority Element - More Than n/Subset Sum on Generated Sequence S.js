//There are n children standing in a queue, each assigned a number arr[i]. The teacher writes s on a paper 
// and gives it to the first child.

//Each child writes the sum of all numbers already on the paper and arr[i], then passes it to the next child.

//Return true if x can be formed by adding some of the numbers written on the paper: else return false.

Input: arr = [1, 2, 4, 2], s = 1, x = 7
Output: true
Explanation:// The first student gets 1 on paper and writes 2. The second student gets [1, 2] and writes 5.
// The third student gets [1, 2, 5] and writes 12. The final sequence of numbers on the paper is 1, 2, 5, 12,
//  22. Using 2 and 5 we can form 7. 
Input: arr = [51, 88], s = 100, x = 500
Output: false
Explanation// The final sequence of numbers on the paper is 100, 151, 339. Using these numbers we cannot form 500.

Constraints

//1 ≤ arr.size() ≤ 105
//1 ≤ arr[i] ≤ 109
//1 ≤ s ≤ 109
//0 ≤ x ≤ 109


/**
 * @param {number[]} arr
 * @param {number} s
 * @param {number} x
 * @returns {boolean}
 */

class Solution {
    isPossible(arr, s, x) {
        
         let n = arr.length;
        let dp = new Array(n + 1);

        dp[0] = s;
        let sum = s;

        for(let i = 1; i <= n; i++) {
            dp[i] = sum + arr[i - 1];
            sum += dp[i];
        }

        let target = x;

        for(let i = n; i >= 0; i--) {
            if(dp[i] <= target) {
                target -= dp[i];
            }

            if(target === 0) {
                return true;
            }
        }

        return false;
    }
}

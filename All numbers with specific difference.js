//Given a positive number n and a number d. Find the count of positive numbers smaller or equal to n such that the difference between
//  the number and sum of its digits is greater than or equal to given specific value d.

Examples:

Input: n = 13, d = 2
Output: 4
Explanation:
//There are 4 numbers satisfying the
//Conditions. These are 10, 11, 12 and 13.
Input: n = 14, d = 3
Output: 5
Explanation:
//There are 5 numbers satisfying the
//Conditions. These are 10, 11, 12, 13 and 14.
Constraints
//1 ≤ n ≤ 109
//1 ≤ d ≤ 109

class Solution {
    sumOfDigits(x) {
        let sum = 0;
        while (x > 0) {
            sum += x % 10;
            x = Math.floor(x / 10);
        }
        return sum;
    }

    getCount(n, d) {
        let low = 1, high = n, ans = -1;

        while (low <= high) {
            let mid = low + Math.floor((high - low) / 2);

            if (mid - this.sumOfDigits(mid) >= d) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return ans !== -1 ? n - ans + 1 : 0;
    }
}

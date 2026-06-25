//Given an integer n, return all the n digit numbers in increasing order, such that their digits are in strictly 
// increasing order(from left to right).

Examples :

Input: n = 1
Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
Explanation: //Single digit numbers are considered to be strictly increasing order.
Input: n = 2
Output:// [12, 13, 14, 15, 16, 17, 18, 19, 23....79, 89]
Explanation:// For n = 2, the correct sequence is 12 13 14 15 16 17 18 19 23 and so on up to 89.
Input: n = 15
Output: []
Explanation:// No such number exist. 
Constraints
//1 ≤ n ≤ 105

/**
    * @param number n
    * @returns number[]
*/
class Solution {

    solve(n, ans, prev, count, num) {
        if (count === n) {
            ans.push(num);
            return;
        }

        for (let i = prev + 1; i <= 9; i++) {
            this.solve(n, ans, i, count + 1, num * 10 + i);
        }
    }

    increasingNumbers(n) {
        let ans = [];

        if (n === 1) {
            for (let i = 0; i <= 9; i++) {
                ans.push(i);
            }
            return ans;
        }

        this.solve(n, ans, 0, 0, 0);
        return ans;
    }
}

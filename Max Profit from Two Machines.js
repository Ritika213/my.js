//Given two machines, Machine A and Machine B, and a set of n tasks. The profit earned for performing each task is given in two 
// arrays a[] and b[] such that if Machine A performs the i-th task, the profit is a[i], and if Machine B performs it, the profit is b[i].

//Machine A can process at most x tasks, and Machine B can process at most y tasks. It is guaranteed that x + y ≥ n, so all tasks 
// can be assigned. Return the maximum possible profit after assigning each task to either Machine A or Machine B.

Examples:

Input: x = 3, y = 3, a = [1, 2, 3, 4, 5], b = [5, 4, 3, 2, 1]
Output: 21
Explanation// Machine A performs tasks with indices [2, 3, 4], and Machine B performs the rest [0, 1], giving profits (3 + 4 + 5) 
//+ (5 + 4) = 21.
Input: x = 4, y = 4, a = [1, 4, 3, 2, 7, 5, 9, 6], b = [1, 2, 3, 6, 5, 4, 9, 8]
Output: 43
Explanation:// Machine A performs tasks with indices [1, 4, 5, 7], and Machine B performs the rest [0, 2, 3, 6], giving profits (4 + 7 + 5 + 6) 
//+ (1 + 3 + 6 + 9) = 41.
Input: x = 3, y = 4, a = [8, 7, 15, 19, 16, 16, 18], b = [1, 7, 15, 11, 12, 31, 9]
Output: 110
Explanation: //Machine A performs tasks with indices [0, 3, 6], and Machine B performs the rest [1, 2, 4, 5], giving profits (8 + 19 + 18)
//  + (7 + 15 + 12 + 31) = 110.
Constraints
//1 ≤ a.size() == b.size() ≤ 105
//1 ≤ x, y ≤ 105
//1 ≤ a[i], b[i] ≤ 104

/**
 * @param {number} x
 * @param {number} y
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number}
 */

class Solution {
    maxProfit(x, y, a, b) {
        let n = a.length;
        let arr = new Array(n);

        for (let i = 0; i < n; i++) {
            if (a[i] > b[i]) {
                arr[i] = [a[i] - b[i], [a[i], b[i]]];
            } else {
                arr[i] = [b[i] - a[i], [a[i], b[i]]];
            }
        }

        // Sort in descending order based on difference
        arr.sort((p1, p2) => p2[0] - p1[0]);

        let ans = 0;

        for (let i = 0; i < n; i++) {
            let ele = arr[i][1];
            let diff = arr[i][0];
            let flag = ele[0] >= ele[1];

            if (!diff) {
                ans += ele[0];

                if (x >= y) {
                    x--;
                } else {
                    y--;
                }

                continue;
            }

            if ((flag && x) || (!flag && !y)) {
                ans += ele[0];
                x--;
            } else {
                ans += ele[1];
                y--;
            }
        }

        return ans;
    }
}
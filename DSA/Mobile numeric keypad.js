//There is a standard numeric keypad on a mobile phone. You can press the current button or any button that is directly above, below,
//  to the left, or to the right of it. For example, if you press 5, then pressing 2, 4, 6, or 8 is allowed. However, diagonal movements
//  and pressing the bottom row corner buttons (* and #) are not allowed.


//Given an integer n, determine how many unique sequences of length n can be formed by pressing buttons on the keypad, starting from any digit.

Examples :

Input: n = 1
Output: 10
Explanation// Possible 1-digit numbers follow keypad moves - From 0 → 0, 1 → 1, 2 → 2 and so on, total 10 valid combinations are possible.

Input: n = 2
Output: 36
Explanation:// Possible 2-digit numbers follow keypad moves -
//From 0 → 00, 08 (2), 
//From 1 → 11, 12, 14 (3),
//From 3 → 33, 32, 36 (3), and so on,
//total 36 valid combinations are possible.
Constraints
//1 ≤ n ≤ 15

class Solution {
    getCount(n) {
        // code here
        let dp1 = Array(10).fill(1); // Initialize dp1 with 1s

    for (let i = 2; i <= n; i++) {
      let dp2 = Array(10).fill(0);
      dp2[0] = dp1[0] + dp1[8];
      dp2[1] = dp1[1] + dp1[2] + dp1[4];
      dp2[2] = dp1[1] + dp1[2] + dp1[3] + dp1[5];
      dp2[3] = dp1[2] + dp1[3] + dp1[6];
      dp2[4] = dp1[1] + dp1[4] + dp1[5] + dp1[7];
      dp2[5] = dp1[2] + dp1[4] + dp1[5] + dp1[6] + dp1[8];
      dp2[6] = dp1[3] + dp1[5] + dp1[6] + dp1[9];
      dp2[7] = dp1[4] + dp1[7] + dp1[8];
      dp2[8] = dp1[0] + dp1[5] + dp1[7] + dp1[8] + dp1[9];
      dp2[9] = dp1[6] + dp1[8] + dp1[9];
      dp1 = dp2;
    }

    // Calculate the total sum
    let ans = dp1.reduce((a, b) => a + b, 0);
    return ans;
    }
}
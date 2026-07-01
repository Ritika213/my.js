//Given an array arr[], find the maximum sum of a non-empty subarray. You are allowed to skip at most one element 
// in the subarray.

Note:// After skipping the element, the subarray must still be non-empty.

Examples:

Input: arr = [1, 2, 3, -4, 5]
Output: 11
Explanation:// We can get maximum sum subarray by skipping -4.
Input: arr = [-2, -3, 4, -1, -2, 1, 5, -3]
Output: 9
Explanation:// We can get maximum sum subarray by skipping -2 as [4,-1,1,5] sums to 9, which is the maximum achievable sum.
Constraints
//1 ≤ arr.size() ≤ 106
//-103 ≤ arr[i] ≤ 103


class Solution {
    maxSumSubarray(arr) {
        let n = arr.length;

        if (n == 1) return arr[0];

        let front = new Array(n);
        let back = new Array(n);

        front[0] = arr[0];
        let ans = arr[0];

        for (let i = 1; i < n; i++) {
            front[i] = Math.max(arr[i], front[i - 1] + arr[i]);
            ans = Math.max(ans, front[i]);
        }

        back[n - 1] = arr[n - 1];

        for (let i = n - 2; i >= 0; i--) {
            back[i] = Math.max(arr[i], back[i + 1] + arr[i]);
        }

        for (let i = 1; i < n - 1; i++) {
            ans = Math.max(ans, front[i - 1] + back[i + 1]);
        }

        return ans;
    }
}
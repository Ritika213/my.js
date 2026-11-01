//Given an integer array arr[], find the maximum subarray sum by squaring at most one element.

Examples:

Input:// arr[] =  [-1, -2, 3, -2, 3]
Output: 10
Explanation:// The subarray {3, -2, 3} with squaring -2 will give the maximum sum as 3 + 4 + 3 = 10.
Input: //arr[] =  [-4, -4, -2, 5, 2, -1]
Output: 27
Explanation:// The subarray {5, 2} with squaring 5 will give a maximum sum of 25 + 2 = 27.
Constraints

//1 ≤ arr.size() ≤ 105
//-103 ≤ arr[i] ≤ 103


/**
 * @param {number[]} arr
 * @return {number}
 */

class Solution {
    maximumSubarray(arr) {
        let n = arr.length;
        let ans = -Infinity;
        let kadane = new Array(n).fill(0);

        // Maximum subarray sum ending at each index
        for (let i = 0, x = 0; i < n; i++) {
            if (x < 0) x = 0;
            x += arr[i];
            kadane[i] = x;
        }

        // Maximum subarray sum starting after each index
        for (let i = n - 1, x = 0; i >= 0; i--) {
            ans = Math.max(
                ans,
                arr[i] * arr[i] +
                Math.max(0, i > 0 ? kadane[i - 1] : 0) +
                Math.max(0, x)
            );

            if (x < 0) x = 0;
            x += arr[i];
        }

        return ans;
    }
}
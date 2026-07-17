//Given an array of integers arr[], find two non-overlapping contiguous sub-arrays such that the absolute difference
//  between the sum of two sub-arrays is maximum.

Examples :

Input: arr = [-2, -3, 4, -1, -2, 1, 5, -3]
Output: 12
Explanation: //Two subarrays are [-2, -3] and [4, -1, -2, 1, 5]
Input: arr = [2, -1, -2, 1, -4, 2, 8]
Output: 16
Explanation: //Two subarrays are [-1, -2, 1, -4] and [2, 8] 
Constraints
//2 ≤ arr.size() ≤ 105
//-103 ≤ arr[i] ≤ 103

class Solution {
    maxDiffSubArrays(arr) {
        let n = arr.length;

        let suff = new Array(n);
        let suff1 = new Array(n);

        let curr = 0,
            mn = Infinity,
            curr1 = 0,
            mx = -Infinity;

        // Suffix minimum and maximum subarray sums
        for (let i = n - 1; i >= 0; i--) {
            curr += arr[i];
            curr1 += arr[i];

            mn = Math.min(mn, curr);
            suff[i] = mn;
            if (curr > 0) curr = 0;

            mx = Math.max(mx, curr1);
            suff1[i] = mx;
            if (curr1 < 0) curr1 = 0;
        }

        let ans = -Infinity;
        curr = 0;
        mn = Infinity;
        curr1 = 0;
        mx = -Infinity;

        // Prefix traversal
        for (let i = 0; i < n - 1; i++) {
            curr += arr[i];
            curr1 += arr[i];

            mn = Math.min(mn, curr);
            ans = Math.max(ans, Math.abs(mn - suff1[i + 1]));
            if (curr > 0) curr = 0;

            mx = Math.max(mx, curr1);
            ans = Math.max(ans, Math.abs(mx - suff[i + 1]));
            if (curr1 < 0) curr1 = 0;
        }

        return ans;
    }
}
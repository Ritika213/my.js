//Given an array arr[] of integers and an integer k, find a subsequence of size k whose product is maximum among
//  all possible subsequences of size k. Return the maximum product that can be obtained.

Examples:

Input: arr = [1, 2, 0, 3], k = 2
Output: 6
Explanation:// Subsequence containing elements {2, 3} gives maximum product: 2*3 = 6
Input: arr = [1, 2, -1, -3, -6, 4], k = 4
Output: 144
Explanation:// Subsequence containing {2, -3, -6, 4} gives maximum product: 2*(-3)*(-6)*4 = 144
Constraints

//arr.size() ≤ 30
//-10 ≤ arr[i] ≤ 10
//1 ≤ k ≤ arr.size()


/*
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
class Solution {
    maxProduct(arr, k) {
        
        let n = arr.length;

        arr.sort((a, b) => a - b);

        let ans = 0;
        let prod = 1;

        let suff = new Array(n).fill(0);

        suff[n - 1] = arr[n - 1];

        for (let i = n - 2; i >= 0; i--) {
            suff[i] = suff[i + 1] * arr[i];
        }

        ans = suff[n - k];

        for (let i = 0; i < n; i++) {
            prod *= arr[i];

            let rem_idx = n - k + (i + 1);

            if (rem_idx >= 0 && rem_idx < n) {
                ans = Math.max(ans, prod * suff[rem_idx]);
            } 
            else if (i + 1 == k) {
                ans = Math.max(ans, prod);
                break;
            }
        }

        return ans;
    }
}
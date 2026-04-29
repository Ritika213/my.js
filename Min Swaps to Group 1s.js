//given a binary array arr[] consisting only of 0s and 1s. Determine the minimum number of swaps required to group all the 1s 
// together in a contiguous subarray.

//A swap operation allows you to choose any two indices i and j and exchange their values (i.e., swap(arr[i], arr[j])).

//If the array contains no 1s, return -1.

Examples:

Input: arr = [1, 0, 1, 0, 1]
Output: 1
Explanation:// Only 1 swap is required to group all 1's together. Swapping index 1 and 4 will give arr[] = [1, 1, 1, 0, 0].
Input: arr = [1, 0, 1, 0, 1, 1] 
Output: 1
Explanation:// Only 1 swap is required to group all 1's together. Swapping index 0 and 3 will give arr[] = [0, 0, 1, 1, 1, 1].
Input: arr = [0, 0, 0]
Output: -1
Explanation// No 1s are present in the array, so return -1.

Constraints
//1 ≤ arr.size() ≤ 106
//0 ≤ arr[i] ≤ 1

/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
    minSwaps(arr) {
        let n = arr.length;

        // total 1s count
        let total = arr.reduce((sum, val) => sum + val, 0);

        if (total === 0) return -1;

        let zero = 0;

        // first window
        for (let i = 0; i < total; i++) {
            if (arr[i] === 0) zero++;
        }

        let ans = zero;

        // sliding window
        for (let i = total; i < n; i++) {
            if (arr[i] === 0) zero++;          // new element
            if (arr[i - total] === 0) zero--;  // remove old

            ans = Math.min(ans, zero);
        }

        return ans;
    }
}
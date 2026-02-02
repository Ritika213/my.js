//given a circular array arr[] of integers, find the maximum possible sum of a non-empty subarray. In a circular array,
//  the subarray can start at the end and wrap around to the beginning. Return the maximum non-empty subarray sum, considering
//  both non-wrapping and wrapping cases.

Examples:

Input: arr = [8, -8, 9, -9, 10, -11, 12]
Output: 22
Explanation:// Starting from the last element of the array, i.e, 12, and moving in a circular fashion, we have max subarray as 
//12, 8, -8, 9, -9, 10, which gives maximum sum as 22.
Input: arr = [10, -3, -4, 7, 6, 5, -4, -1]
Output: 23
Explanation:// Maximum sum of the circular subarray is 23. The subarray is [7, 6, 5, -4, -1, 10].
Input: arr = [5, -2, 3, 4]
Output: 12
Explanation// The circular subarray [3, 4, 5] gives the maximum sum of 12.

Constraints
//1 ≤ arr.size() ≤ 105
//-104 ≤ arr[i] ≤ 104

/*
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    maxCircularSum(arr) {
        let n = arr.length;

        let minSum = 0, maxSum = 0;
        let minSoFar = Infinity;
        let maxSoFar = -Infinity;
        let total = 0;

        for (let i of arr) {
            total += i;

            // Max subarray sum (Kadane)
            maxSum += i;
            maxSoFar = Math.max(maxSoFar, maxSum);
            if (maxSum < 0) maxSum = 0;

            // Min subarray sum
            minSum += i;
            minSoFar = Math.min(minSoFar, minSum);
            if (minSum > 0) minSum = 0;
        }

        // If all elements are negative
        if (maxSoFar < 0) return maxSoFar;

        return Math.max(maxSoFar, total - minSoFar);
    }
}

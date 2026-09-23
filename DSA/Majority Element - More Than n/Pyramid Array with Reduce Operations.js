//Given an array arr[] consisting of stones, where arr[i] represents the height of the i-th stone.

//You need to transform the stones into a pyramid by only reducing the heights of the stones. Reducing the height 
// of a stone by 1 costs 1 unit, and stones cannot be increased or moved.
//A valid pyramid consists of a contiguous subarray whose heights follow the pattern: 1, 2, 3, ..., x - 1, x,
//  x - 1, ..., 2, 1 for some positive integer x.
//Every stone outside this subarray must have a height of 0.

//Find the minimum total cost required to build a pyramid. It is guaranteed that at least one valid pyramid 
// can always be formed.

Examples:

Input: arr = [1, 2, 3, 4, 2, 1]
Output: 4
Explanation: //We can obtain the array [1, 2, 3, 2, 1, 0] by subtracting 2 out of 4, 1 out of 2, and 1 out of 1. 
//In total, we will subtract 4.
Input: arr = [1, 2, 1]
Output: 0
Explanation// The array is already in pyramid form.
//Constraints:

Constraints

//1 ≤ arr.size(), arr[i] ≤ 105

class Solution {
    formPyramid(arr) {
        let n = arr.length;

        let total = 0;
        for (let x of arr) {
            total += x;
        }

        if (n <= 2) return total - 1;

        let left = new Array(n);
        let right = new Array(n);

        left[0] = 1;

        for (let i = 1; i < n; i++) {
            left[i] = Math.min(left[i - 1] + 1, arr[i]);
        }

        right[n - 1] = 1;

        for (let i = n - 2; i >= 0; i--) {
            right[i] = Math.min(right[i + 1] + 1, arr[i]);
        }

        let maxX = 0;

        for (let i = 0; i < n; i++) {
            maxX = Math.max(maxX, Math.min(left[i], right[i]));
        }

        return total - maxX * maxX;
    }
}
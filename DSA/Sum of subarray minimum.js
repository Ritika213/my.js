//Given an array arr[] of positive integers, find the total sum of the minimum elements of every possible subarrays.

Note: //It is guaranteed that the total sum will fit within a 32-bit unsigned integer.

Examples:

Input: arr = [3, 1, 2, 4]
Output: 17
Explanation:// Subarrays are [3], [1], [2], [4], [3, 1], [1, 2], [2, 4], [3, 1, 2], [1, 2, 4], [3, 1, 2, 4]. Minimums are
 //3, 1, 2, 4, 1, 1, 2, 1, 1, 1. Sum of all these is 17.
Input: arr = [71, 55, 82, 55]
Output: 593
Explanation:// The sum of the minimum of all the subarrays is 593.
Constraints
//1 ≤ arr.size() ≤ 3*104
//1 ≤ arr[i] ≤ 103

class Solution {
    sumSubMins(arr) {
        const n = arr.length;
        const mod = 1e9 + 7;
        
        const prevSmaller = new Array(n).fill(0);
        const nextSmaller = new Array(n).fill(0);
        const stack = [];

        // Previous Smaller Element Distance
        for (let i = 0; i < n; i++) {
            while (stack.length > 0 && arr[stack[stack.length - 1]] > arr[i]) {
                stack.pop();
            }
            prevSmaller[i] = stack.length === 0 ? i + 1 : i - stack[stack.length - 1];
            stack.push(i);
        }

        // Clear the stack
        stack.length = 0;

        // Next Smaller Element Distance
        for (let i = n - 1; i >= 0; i--) {
            while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
                stack.pop();
            }
            nextSmaller[i] = stack.length === 0 ? n - i : stack[stack.length - 1] - i;
            stack.push(i);
        }

        // Calculate the sum of contributions
        let sum = 0;
        for (let i = 0; i < n; i++) {
            const contrib = (arr[i] * prevSmaller[i] * nextSmaller[i]) % mod;
            sum = (sum + contrib) % mod;
        }

        return sum;
    }
}



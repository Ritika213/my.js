//Given a non-empty integer array arr[]. Your task is to find and return the top k elements which have the highest frequency in the array.

Note:// If two numbers have the same frequency, the larger number should be given the higher priority.

Examples:

Input: arr = [3, 1, 4, 4, 5, 2, 6, 1], k = 2
Output: [4, 1]
Explanation:// Frequency of 4 is 2 and frequency of 1 is 2, these two have the maximum frequency and 4 is larger than 1.
Input: arr = [7, 10, 11, 5, 2, 5, 5, 7, 11, 8, 9], k = 4
Output: [5, 11, 7, 10]
Explanation:// Frequency of 5 is 3, frequency of 11 is 2, frequency of 7 is 2, frequency of 10 is 1.
Constraints
//1 ≤ arr.size() ≤ 105
//1 ≤ arr[i] ≤ 105
//1 ≤ k ≤ no. of distinct elements


// User function Template for javascript

/**
 * @param {Number[]} arr
 * @param {Number} k
 * @returns {Number}
 */

class Solution {
    topK(nums, k) {
        
        let freq = new Map();
        let ans = [];

        for (let i = 0; i < nums.length; i++) {
            freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);
        }

        let sortedArray = Array.from(freq.entries()).sort((a, b) => {
            if (a[1] === b[1]) {
                return b[0] - a[0];
            } else {
                return b[1] - a[1];
            }
        });

        for (let i = 0; i < k; i++) {
            ans.push(sortedArray[i][0])
        }
        return ans;
    }
}
//Given an array arr[] consisting of positive integers, your task is to find the length of the longest subarray that contains at most
// two distinct integers.

Examples:

Input: arr = [2, 1, 2]
Output: 3
Explanation:// The entire array [2, 1, 2] contains at most two distinct integers (2 and 1). Hence, the length of the longest subarray is 3.
Input: arr = [3, 1, 2, 2, 2, 2]
Output: 5
Explanation:// The longest subarray containing at most two distinct integers is [1, 2, 2, 2, 2], which has a length of 5.
Constraints
//1 ≤ arr.size() ≤ 105
//1 ≤ arr[i] ≤ 105

class Solution {
    totalElements(arr) {
        
        let ans = 0;
        let n = arr.length;
        let mp = new Map();
        let i = 0, j = 0;

        while (j < n) {
            // Add arr[j] to the map or increment its count
            mp.set(arr[j], (mp.get(arr[j]) || 0) + 1);

            // Shrink the window if more than 2 distinct elements
            while (mp.size > 2) {
                mp.set(arr[i], mp.get(arr[i]) - 1);
                if (mp.get(arr[i]) === 0) {
                    mp.delete(arr[i]);
                }
                i++;
            }

            ans = Math.max(ans, j - i + 1);
            j++;
        }
        return ans;
    }
}
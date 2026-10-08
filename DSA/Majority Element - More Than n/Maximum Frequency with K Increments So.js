//Given an integer array arr[]. In one operation, you can choose an index and increment its value by 1.

//Find the maximum possible frequency of any element after performing at most k operations.

Examples:

Input: arr= [2, 2, 4], k = 4
Output: 3
Explanation:// Apply two increment operations on index 0 and two operations on index 1 to make arr[]= [4, 4, 4].
// Frequency of 4 is 3.
Input: arr = [7, 7, 7, 7], k = 5
Output: 4
Explanation:// The frequency of 7 is already 4, so no operations are needed.
Constraints

//1 ≤ arr.size() ≤ 105
//1 ≤ arr[i] ≤ 106
//0 ≤ k ≤ 105


/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {
    maxFrequency(arr, k) {
        
       arr.sort((a,b)=>a-b);
               let sum = 0;
               let left = 0, ans = 1;
               for (let right = 0; right < arr.length; right++) {
                   sum += arr[right];
                   while (arr[right] * (right - left + 1) - sum > k) {
                       sum -= arr[left];
                       left++;
                   }
                   ans = Math.max(ans, right - left + 1);
               }
               return ans; 
    }
}
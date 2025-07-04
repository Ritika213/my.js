//given an array arr[] of positive integers and an integer k, find the number of subarrays in arr[] where the count of 
//distinct integers is at most k.

Note:// A subarray is a contiguous part of an array.

Examples:

Input: arr = [1, 2, 2, 3], k = 2
Output: 9
Explanation: //Subarrays with at most 2 distinct elements are: [1], [2], [2], [3], [1, 2], [2, 2], [2, 3], [1, 2, 2] and [2, 2, 3].
Input: arr= [1, 1, 1], k = 1
Output: 6
Explanation: //Subarrays with at most 1 distinct element are: [1], [1], [1], [1, 1], [1, 1] and [1, 1, 1].
Input: arr = [1, 2, 1, 1, 3, 3, 4, 2, 1], k = 2
Output: 24
Explanation //There are 24 subarrays with at most 2 distinct elements.

Constraints
//1 ≤ arr.size() ≤ 2*104
//1 ≤ k ≤ 2*104
//1 ≤ arr[i] ≤ 109

class Solution {
    countAtMostK(arr, k) {
        
        let ans = 0;
        let i = 0;
        let n = arr.length;
        let mp = new Map();

        for (let j = 0; j < n; j++) {
            mp.set(arr[j], (mp.get(arr[j]) || 0) + 1);

            while (mp.size > k) {
                mp.set(arr[i], mp.get(arr[i]) - 1);
                if (mp.get(arr[i]) === 0) {
                    mp.delete(arr[i]);
                }
                i++;
            }

            ans += (j - i + 1);
        }

        return ans;
    }
}
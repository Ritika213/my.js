//Given an unsorted array of integers, find the number of continuous subarrays having sum exactly equal to a given number k.

Examples:

Input: arr = [10, 2, -2, -20, 10], k = -10
Output: 3
Explaination:// Subarrays: arr[0...3], arr[1...4], arr[3...4] have sum exactly equal to -10.
Input: arr = [9, 4, 20, 3, 10, 5], k = 33
Output: 2
Explaination:// Subarrays: arr[0...2], arr[2...4] have sum exactly equal to 33.
Input: arr = [1, 3, 5], k = 0
Output: 0
Explaination// No subarray with 0 sum.

Constraints

//1 ≤ arr.size() ≤ 105
//-103 ≤ arr[i] ≤ 103
//-107 ≤ k ≤ 107

class Solution {
    countSubarrays(arr, k) {
        
         let n = arr.length;
        let map = new Map();
        map.set(0, 1); // Initialize with prefix sum 0
        let sum = 0, ans = 0;

        for (let i = 0; i < n; i++) {
            sum += arr[i]; // Calculate prefix sum
            
            // Check if (sum - k) exists in the map
            if (map.has(sum - k)) {
                ans += map.get(sum - k); // Add the count of such subarrays
            }
            
            // Update the map with the current prefix sum
            map.set(sum, (map.get(sum) || 0) + 1);
        }
        
        return ans;
    }
}
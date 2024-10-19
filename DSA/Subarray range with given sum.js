//Given an unsorted array of integers arr[], and a target tar, determine the number of subarrays whose elements sum up to the target value.

Examples:

Input: arr = [10, 2, -2, -20, 10] , tar = -10
Output: 3
Explanation:// Subarrays with sum -10 are: [10, 2, -2, -20], [2, -2, -20, 10] and [-20, 10].
Input: arr = [1, 4, 20, 3, 10, 5] , tar = 33
Output: 1
Explanation// Subarray with sum 33 is: [20,3,10].
//Expected Time Complexity: O(n)
//Expected Auxilary Space: O(n)

Constraints:
1 <= arr.size() <= 106
-105 <= arr[i] <= 105
-105 <= tar <= 105

class Solution {
    // Function to count the number of subarrays which adds to the given sum.
    subArraySum(arr, tar) {
        // code here
        let sum=0;
        let count=0;
        let map= new Map()
         // Initialize the map with 0 sum having 1 count (important for cases where a subarray starts from the beginning)
        map.set(0, 1);
        
        for(let i=0;i<arr.length;i++){
             sum += arr[i];  // Update the cumulative sum
            
            // Check if (sum - target) exists in the map (means we found a subarray that sums to target)
            if (map.has(sum - tar)) {
                count += map.get(sum - tar);  // Increment count by the number of occurrences of (sum - target)
            }
            
            // Update the map with the current sum
            map.set(sum, (map.get(sum) || 0) + 1);
        }
        
        return count;  // Return the total count of subarrays
    }
}
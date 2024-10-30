//Given an array arr[] of positive integers. Find the number of pairs of integers whose difference equals a given number k.
Note:// (a, b) and (b, a) are considered the same. Also, the same numbers at different indices are considered different.

Examples:

Input: arr = [1, 5, 3, 4, 2], k = 3
Output: 2
Explanation: //There are 2 pairs with difference 3,the pairs are {1, 4} and {5, 2} 
Input: arr = [8, 12, 16, 4, 0, 20], k = 4
Output: 5
Explanation: //There are 5 pairs with difference 4, the pairs are {0, 4}, {4, 8}, {8, 12}, {12, 16} and {16, 20}.
Constraints:
1 <= arr.size() <= 106
1 <= k <= 106
0 <= arr[i] <= 106

class Solution {
    countPairsWithDiffK(arr, k) {
        
         // Create a map to count frequency of each element
        let map = new Map();
        // Count frequency of each element
        for (let i = 0; i < arr.length; i++) {
            map.set(arr[i], (map.get(arr[i]) || 0) + 1);
        }
        
        // Variable to store the result
        let total = 0;
        // Iterate through the array and check if k + arr[i] exists
        for (let i = 0; i < arr.length; i++) {
            total += map.get(k + arr[i]) || 0;
        }
        
        return total;
}
}
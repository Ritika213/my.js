//Given an array arr[] and an integer target. You have to find numbers of pairs in array arr[] which sums up to given target.

Examples:

Input: arr = [1, 5, 7, -1, 5], target = 6 
Output: 3
Explanation:// Pairs with sum 6 are (1, 5), (7, -1) and (1, 5). 
Input: arr = [1, 1, 1, 1], target = 2 
Output: 6
Explanation:// Pairs with sum 2 are (1, 1), (1, 1), (1, 1), (1, 1), (1, 1), (1, 1).
Input: arr = [10, 12, 10, 15, -1], target = 125
Output: 0
Constraints:
1 <= arr.size() <= 105
-104 <= arr[i] <= 104
1 <= target <= 104

class Solution {
    countPairs(arr, target) {
        
        let map = new Map()
        let count =0;
        for(let i=0;i<arr.length;i++){
            let complement = target - arr[i];
            if(map.has(complement)){
                count+= map.get(complement)
            }
             // Update the count for the current element in the map
            map.set(arr[i], (map.get(arr[i]) || 0) + 1);
        }
        return count;
    }
}
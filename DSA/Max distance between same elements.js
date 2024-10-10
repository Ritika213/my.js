//Given an array arr[] with repeated elements, the task is to find the maximum distance between two occurrences of an element.

Note:// You may assume that every input array has repetitions.

Examples:

Input: arr = [1, 1, 2, 2, 2, 1]
Output: 5
Explanation:// distance for 1 is: 5-0 = 5, distance for 2 is : 4-2 = 2, So max distance is 5.
Input: arr = [3, 2, 1, 2, 1, 4, 5, 8, 6, 7, 4, 2]
Output: 10
Explanation //maximum distance for 2 is 11-1 = 10, maximum distance for 1 is 4-2 = 2 ,maximum distance for 4 is 10-5 = 5, So max distance is 10.
//Expected Time Complexity :  O(n)
//Expected Auxilliary Space : O(n)

Constraints:
1 <= arr.size() <= 106
1 <= arr[i] <= 109

class Solution {

    maxDistance(arr) {
        
         // Use a Map to store the first and last occurrence of each element
        let mp1 = new Map();
        
        // Loop through the array to find the first and last occurrence of each element
        for (let i = 0; i < arr.length; i++) {
            if (!mp1.has(arr[i])) {
                mp1.set(arr[i], { first: i, last: i });
            } else {
                let current = mp1.get(arr[i]);
                current.last = i;
                mp1.set(arr[i], current);
            }
        }
        
        // Find the maximum distance between the first and last occurrences
        let maxi = 0;
        for (let [key, value] of mp1) {
            maxi = Math.max(maxi, value.last - value.first);
        }
        
        return maxi;
    }
}
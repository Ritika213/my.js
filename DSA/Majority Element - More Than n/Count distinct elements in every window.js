//Given an integer array arr[] and a number k. Find the count of distinct elements in every window of size k in the array.

Examples:

Input: arr = [1, 2, 1, 3, 4, 2, 3], k = 4
Output: [3, 4, 4, 3]
Explanation:
//First window is [1, 2, 1, 3], count of distinct numbers is 3.
//Second window is [2, 1, 3, 4] count of distinct numbers is 4.
//Third window is [1, 3, 4, 2] count of distinct numbers is 4.
//Fourth window is [3, 4, 2, 3] count of distinct numbers is 3.
Input: arr = [4, 1, 1], k = 2
Output: [2, 1]
Explanation:
//First window is [4, 1], count of distinct numbers is 2.
//Second window is [1, 1], count of distinct numbers is 1.
Input: arr = [1, 1, 1, 1, 1], k = 3
Output: [1, 1, 1]
Explanation// Every window of size 3 in the array [1, 1, 1, 1, 1], contains only the element 1, so the number of distinct elements in 
//each window is 1.
Constraints
//1 ≤ k ≤ arr.size() ≤ 105
//1 ≤ arr[i] ≤ 105

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number[]}
 */

class Solution {
    countDistinct(arr, k) {
        
        const n = arr.length;
    const map = new Map();
    const res = [];
    
    // Initialize the map for the first window
    for (let i = 0; i < k; i++) {
        map.set(arr[i], (map.get(arr[i]) || 0) + 1);
    }
    res.push(map.size);
    
    let j = 0;
    for (let i = k; i < n; i++) {
        // Remove the element going out of the window
        if (map.get(arr[j]) === 1) {
            map.delete(arr[j]);
        } else {
            map.set(arr[j], map.get(arr[j]) - 1);
        }
        j++;
         // Add the new element coming into the window
        map.set(arr[i], (map.get(arr[i]) || 0) + 1);
        
        // Add the count of distinct elements to the result
        res.push(map.size);
    }
    
    return res;
    }
}
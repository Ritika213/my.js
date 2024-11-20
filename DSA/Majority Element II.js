//given an array of integer arr[] where each number represents a vote to a candidate. Return the candidates that have votes greater
// than one-third of the total votes, If there's not a majority vote, return an empty array. 

Note:// The answer should be returned in an increasing format.

Examples:

Input: arr = [2, 1, 5, 5, 5, 5, 6, 6, 6, 6, 6]
Output: [5, 6]
Explanation:// 5 and 6 occur more n/3 times.
Input: arr = [1, 2, 3, 4, 5]
Output: []
Explanation: //no candidate occur more than n/3 times.
Constraint:
1 <= arr.size() <= 106
-109 <= arr[i] <= 109

class Solution {
    // Function to find the majority elements in the array
    findMajority(arr) {
        // Your code goes here
        let mp = new Map();

        // Count the frequency of each element
        for (let it of arr) {
            mp.set(it, (mp.get(it) || 0) + 1);
        }

        let n = arr.length;
        let ans = new Set(); // Use a Set to avoid duplicates

        // Find elements with frequency greater than n/3
        for (let [key, value] of mp) {
            if (value > Math.floor(n / 3)) {
                ans.add(key);
            }
        }

        // Convert Set to array and sort the result
        return Array.from(ans).sort((a, b) => a - b);
    }
}
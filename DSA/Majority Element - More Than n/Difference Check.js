//Given an array arr[] of time strings in 24-hour clock format "HH:MM:SS", return the minimum difference in seconds between any 
//two time strings in the arr[].
//The clock wraps around at midnight, so the time difference between "23:59:59" and "00:00:00" is 1 second.

Examples:

Input: arr = ["12:30:15", "12:30:45"]
Output: 30
Explanation:// The minimum time difference is 30 seconds.
Input: arr = ["00:00:01", "23:59:59", "00:00:05"]
Output: 2
Explanation:// The time difference is minimum between "00:00:01" and "23:59:59".
Constraints
//2 ≤ arr.size() ≤ 105
//arr[i] is in "HH:MM:SS" format.

class Solution {
    minDifference(arr) {
        
        let n = arr.length;
        let t = [];

        for (let i = 0; i < n; i++) {
            let [h, m, s] = arr[i].split(":").map(Number);
            let total = h * 3600 + m * 60 + s;
            t.push(total);
        }

        // Sort time in ascending order
        t.sort((a, b) => a - b);

        let ans = Infinity;

        // Check difference between adjacent times
        for (let i = 1; i < n; i++) {
            ans = Math.min(ans, t[i] - t[i - 1]);
        }

        // Check circular difference (last and first)
        let fullDay = 24 * 3600; // total seconds in a day
        ans = Math.min(ans, fullDay - t[n - 1] + t[0]);

        return ans;
    }
}
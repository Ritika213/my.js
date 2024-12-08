//Given an array of Intervals arr[][], where arr[i] = [starti, endi]. The task is to merge all of the overlapping Intervals.

Examples:

Input: //arr[][] = [[1,3],[2,4],[6,8],[9,10]]
Output: [[1,4], [6,8], [9,10]]
Explanation: //In the given intervals we have only two overlapping intervals here, [1,3] and [2,4] which on merging will become [1,4]. 
//Therefore we will return [[1,4], [6,8], [9,10]].
Input:// arr[][] = [[6,8],[1,9],[2,4],[4,7]]
Output: [[1,9]]
Explanation:// In the given intervals all the intervals overlap with the interval [1,9]. Therefore we will return [1,9].
Constraints
//1 ≤ arr.size() ≤ 105
//0 ≤ starti ≤ endi ≤ 105

class Solution {
    // Function to Merge overlapping arr.
    mergeOverlap(arr) {
        
         arr.sort((a, b) => a[0] - b[0]);

        let ans = [];
        let s = arr[0][0], e = arr[0][1];

        for (let i = 1; i < arr.length; i++) {
            // If intervals overlap
            if (arr[i][0] <= e) {
                // Merge the intervals by updating the end
                e = Math.max(e, arr[i][1]);
            } else {
                // No overlap, push the current interval to the result
                ans.push([s, e]);
                s = arr[i][0];
                e = arr[i][1];
            }
        }
         // Push the last interval
        ans.push([s, e]);
        return ans;
    }
}
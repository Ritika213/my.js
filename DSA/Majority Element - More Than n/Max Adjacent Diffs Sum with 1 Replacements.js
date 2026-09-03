//Given an integer array arr[], you are allowed to replace any elements with 1.  Find the maximum sum of
//  absolute differences between consecutive elements after any number of modifications.

Examples:

Input: arr = [3, 2, 1, 4, 5]
Output: 8
Explanation:// Modify the array as arr[] = [3, 1, 1, 4, 1]. 
//Sum = |1-3| + |1-1| + |4-1| + |1-4| = 8, the maximum possible.
Input: arr = [1, 5]
Output: 4
Explanation: //No modification needed. Sum = |5-1| = 4.
Constraints

//1 ≤ arr.size() ≤ 105


class Solution {
    maxDiffSum(arr) {
        
        let keep = 0;

        let replace = 0;

        for (let i = 1; i < arr.length; i++) {
            let newKeep = Math.max(
                keep + Math.abs(arr[i] - arr[i - 1]),
                replace + Math.abs(arr[i] - 1)
            );

            let newReplace = Math.max(
                keep + Math.abs(1 - arr[i - 1]),
                replace
            );

            keep = newKeep;
            replace = newReplace;
        }

        return Math.max(keep, replace);
    }
}
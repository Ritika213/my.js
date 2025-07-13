//Given an array arr[] of positive integers, your task is to find the maximum possible sum of all elements that are not part of 
//the Longest Increasing Subsequence (LIS).

Examples:

Input: arr = [4, 6, 1, 2, 3, 8]
Output: 10
Explanation: //The elements which are not in LIS is 4 and 6.
Input: arr = [5, 4, 3, 2, 1]
Output: 14
Explanation:// The elements which are not in LIS is 5, 4, 3 and 2.
Constraints
//1 ≤ arr.size() ≤ 103
//1 ≤ arr[i] ≤ 105

class Solution {
    nonLisMaxSum(arr) {
        const n = arr.length;
        let lis = [];
        let sum = 0;
        let lisSum = Array(n + 2).fill(0); // safer: extra space

        for (let i = 0; i < n; i++) {
            sum += arr[i];

            let index = this.lowerBound(lis, arr[i]);

            if (index === lis.length)
                lis.push(arr[i]);
            else
                lis[index] = arr[i];

            lisSum[index + 1] = (lisSum[index] || 0) + arr[i];
        }

        return sum - lisSum[lis.length];
    }

    lowerBound(arr, target) {
        let left = 0, right = arr.length;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] < target)
                left = mid + 1;
            else
                right = mid;
        }
        return left;
    }
}
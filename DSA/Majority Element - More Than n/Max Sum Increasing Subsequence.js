//Given an array of positive integers arr[], find the maximum sum of a subsequence such that the elements of the subsequence form a strictly 
//increasing sequence.
//In other words, among all strictly increasing subsequences of the array, return the one with the largest possible sum.

Examples:

Input: arr = [1, 101, 2, 3, 100]
Output: 106
Explanation: //The maximum sum of an increasing sequence is obtained from [1, 2, 3, 100].
Input: arr = [4, 1, 2, 3]
Output: 6
Explanation: //The maximum sum of an increasing sequence is obtained from [1, 2, 3].
Input: arr = [4, 1, 2, 4]
Output: 7
Explanation //The maximum sum of an increasing sequence is obtained from [1, 2, 4].

Constraints
//1 ≤ arr.size() ≤ 103
//1 ≤ arr[i] ≤ 105

class Solution {
    maxSumIS(arr) {
        
         let n = arr.length;

        let sum=new Array(n);
        for(let i = 0; i < n; i++){
            sum[i] = arr[i];
        }

        for(let i = 0; i < n; i++){
            for(let j = 0; j < i; j++){
                if(arr[i] > arr[j]){
                    sum[i] = Math.max(sum[i], arr[i] + sum[j]);
                }
            }
        }

        let ans = 0;
        for(let i = 0; i < n; i++){
            ans = Math.max(ans, sum[i]);
        }

        return ans;
    }
}
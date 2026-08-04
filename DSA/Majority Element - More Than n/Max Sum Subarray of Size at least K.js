//Given an array arr[] and an integer k, find the maximum sum among all contiguous subarrays having a length greater
//  than or equal to k.

Examples:

Input: arr = [1, -2, 2, -3], k = 3
Output: 1
Explanation:// The sub-array of length at least 3 that produces greatest sum is [1, -2, 2]
Input: arr = [1, 1, 1, 1, 1, 1], k = 2
Output: 6
Explanation: //The sub-array of length at least 2 that produces greatest sum is [1, 1, 1, 1, 1, 1]
Input: arr = [-4, -2, 1, -3], k = 2
Output: -1
Explanation// The sub-array of length at least 2 that produces greatest sum is [-2, 1]
Constraints

//1 ≤ arr.size() ≤ 105
//-104 ≤ arr[i] ≤ 104
//1 ≤ k ≤ arr.size()


/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

class Solution {
    maxSumWithK(arr, k) {
        
        let maxSum  = new Array(arr.length);
        maxSum[0]= arr[0];
        let sum =arr[0];
        let i=1;
        while (i<arr.length){
            sum=Math.max(arr[i],sum+arr[i]);
            maxSum[i]=sum;
            i++;
        }
        sum=0;
        for(i=0;i<k;i++){
            sum+=arr[i];
        }
        let ans = sum;
        for(i =k;i<arr.length;i++){
            sum= sum+arr[i]-arr[i-k];
            ans=Math.max(ans,sum);
            ans=Math.max(ans,sum+maxSum[i-k]);
        }
        return ans; 
    }
};
//Given an array arr of non-negative integers and an integer sum, the task is to count all subsets of the given array with a sum equal to a given 
//sum.

Note:// Answer can be very large, so, output answer modulo 109+7.

//Example 1:

Input: 
N = 6
arr = [5, 2, 3, 10, 6, 8]
sum = 10
Output: 
3
Explanation 
//{5, 2, 3}, {2, 8}, {10} are possible subsets.

class Solution {

    perfectSum(arr,n,sum){
        //code here
         const MOD = 1000000007;
        const dp = new Array(sum + 1).fill(0);
        dp[0] = 1;

        for (let i = 0; i < n; i++) {
            for (let j = sum; j >= arr[i]; j--) { // Corrected the loop indices
                dp[j] += dp[j - arr[i]];
                dp[j] %= MOD;
            }
        }

        return dp[sum];
    }
}
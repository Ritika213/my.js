//Given an array arr[] of non-negative integers and an integer sum, the task is to count all subsets of the given array with a 
//sum equal to a given sum.

Note: //Answer can be very large, so, output answer modulo 109+7

Input: N = 6, arr = [2, 3, 5, 6, 8, 10]
       sum = 10
Output: 3
Explanation //{2, 3, 5}, {2, 8}, {10} are possible subsets.

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


//A bit flip of a number x is choosing a bit in the binary representation of x and flipping it from either 0 to 1 or 1 to 0.

//For example, for x = 7, the binary representation is 111 and we may choose any bit (including any leading zeros not shown) and flip it. We can flip the first bit from the right to get 110, flip the second bit from the right to get 101, flip the fifth bit from the right (a leading zero) to get 10111, etc.
//Given two integers start and goal, return the minimum number of bit flips to convert start to goal.


Input: start = 10, goal = 7
Output: 3
Explanation: //The binary representation of 10 and 7 are 1010 and 0111 respectively. We can convert 10 to 7 in 3 steps:
//- Flip the first bit from the right: 1010 -> 1011.
//- Flip the third bit from the right: 1011 -> 1111.
//- Flip the fourth bit from the right: 1111 -> 0111.
//it can be shown we cannot convert 10 to 7 in less than 3 steps. Hence, we return 3.

var minBitFlips = function(start, goal) {
    let res = start ^ goal;
      let ans = 0;
      while(res > 0){
          if( (res & 1) == 1) ans++;
          res = res >> 1;
      }
      return ans;    
    };
//Given an array arr[] of size N, check if it can be partitioned into two parts such that the sum of elements in both parts is the same.

//Example 1:

Input: N = 4
arr = //{1, 5, 11, 5}
Output// YES
Explanation: 
//The two parts are {1, 5, 5} and {11}.
//Example 2:

Input: N = 3
arr =// {1, 3, 5}
Output// NO
Explanation// This array can never be partitioned into two such parts.

Task:
//You do not need to read input or print anything. Your task is to complete the function equalPartition() which takes the value N and the 
//array as input parameters and returns 1 if the partition is possible. Otherwise, returns 0.

//Expected Time Complexity: O(N*sum of elements)
//Expected Auxiliary Space: O(sum of elements)

Constraints
//1 ≤ N ≤ 100
//1 ≤ arr[i] ≤ 1000
//N*sum of elements ≤ 5*106


class Solution {
    
    equalPartition(arr, n)
    {
        
        let S = 0;

    for (let i = 0; i < n; i++) {
        S += arr[i];
    }

    if (S % 2 === 0) {
        S /= 2;
        const dp = new Array(S + 1).fill(0);
        dp[0] = 1;

        for (let i = 0; i < n; i++) {
            for (let j = S; j >= 0; j--) {
                if (j - arr[i] >= 0) {
                    dp[j] |= dp[j - arr[i]];
                }
            }
        }

        return dp[S];
    } else {
        return 0;
    }
}
}
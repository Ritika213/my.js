//Given an array of integers Arr of size N and a number K. Return the maximum sum of a subarray of size K.

//NOTE*: A subarray is a contiguous part of any given array.


Input:
N = 4, K = 2
Arr = [100, 200, 300, 400]
Output:
700
Explanation
//Arr3  + Arr4 =700, which is maximum.

class Solution {
    maximumSumSubarray(K, Arr, N) {
      
      let sum=0;
      for(let i=0;i<K;i++){
          sum+=Arr[i]
      }
      let maxSum=sum;
      for(let i=K;i<N;i++){
          sum+=Arr[i];
          sum-=Arr[i-K]
          maxSum= Math.max(maxSum,sum)
      }
      return maxSum;
    }
  }
  
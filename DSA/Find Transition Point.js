//Given a sorted array containing only 0s and 1s, find the transition point, i.e., the first index where 1 was observed, and before that, 
//only 0 was observed.

//Example 1:

Input:
N = 5
arr = //{0,0,0,1,1}
Output//: 3
Explanation:// index 3 is the transition point where 1 begins.
//Example 2:

Input:
N = 4
arr = //{0,0,0,0}
Output//: -1
Explanation //Since, there is no "1",the answer is -1.

Task:
//don't need to read input or print anything. The task is to complete the function transitionPoint() that takes array arr and N as
// input parameters and returns the 0-based index of the position where 0 ends and 1 begins. If array does not have any 1, return -1. 
//If array does not have any 0, return 0.

//Expected Time Complexity: O(Log(N))
//Expected Auxiliary Space: O(1)

Constraints
//1 ≤ N ≤ 105
//0 ≤ arr[i] ≤ 1

class Solution {
    transitionPoint(arr, n) {
      //code here
      if(n==1 && (arr[0]==1))
      {
          return 0;
      }
     for(let i=0;i<n-1;i++)
     {
         if(arr[i]!=arr[i+1])
         {
             return i+1;
         }
     }
     if(arr[n-1]==1)
     {
      return 0;
     }
     return -1;
  
  
    }
  }
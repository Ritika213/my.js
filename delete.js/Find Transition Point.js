//Given a sorted array containing only 0s and 1s, find the transition point, i.e., the first index where 1 was observed, and before that, 
//only 0 was observed.


Input:
N = 5
arr = //{0,0,0,1,1}
Output// 3
Explanation //index 3 is the transition point where 1 begins.

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

  //You are given an integer input N and you have to find whether it is the sum or the difference of the integer 5. (5+5, 5+5+5, 5-5,5-5-5+5+5…..)


Input:
N = 10
Output:
YES
Explanation//Because 10 can be written as a sum of 5+5.

class Solution{
    isValid(n){
        //code here
        if(n%5!=0){
            return "NO"
        }
        return "YES"
    }
}


//You are given two strings of equal lengths, s1 and s2. The task is to check if s2 is a rotated version of the string s1.

Note: //The characters in the strings are in lowercase.

Input:
geeksforgeeks
forgeeksgeeks
Output: 
1
Explanation// s1 is geeksforgeeks, s2 is forgeeksgeeks. Clearly, s2 is a rotated version of s1 as s2 can be obtained by left-rotating s1 by 5 units.

class Solution 
{
    //Function to check if two strings are rotations of each other or not.
    areRotations(s1, s2)
    {
    
        let t=s1+s1;
        let n=s2.length;
        let m=s1.length;
        if(n!=m) 
            return 0;
        for(let i=0;i<t.length;i++)
        {
            if(t.substr(i,n)==s2)
                return 1;
        }
        return 0;
    }
}


//binary search

//Given a sorted array of size N and an integer K, find the position(0-based indexing) at which K is present in the array using binary search.


Input:
N = 5
arr= //{1 2 3 4 5} 
K = 4
Output: 3
Explanation //4 appears at index 3.

class Solution {

       binarysearch( arr,  n,  k) {
          // code here
          let start = 0, end = n-1;
          let mid = start + (end - start)/2;
          
          while(start <= end){
              if(arr[mid] == k){
                  return mid;
              }
              
              else if(arr[mid] > k){
                  end = mid-1;
              }
              else{
                  start = mid+1;
              }
              mid = start + (end - start)/2;
          }
         
          return -1;
      }
  };

  //k items with the maximum sum


  //There is a bag that consists of items, each item has a number 1, 0, or -1 written on it.

//You are given four non-negative integers numOnes, numZeros, numNegOnes, and k.

//The bag initially contains:

//numOnes items with 1s written on them.
//numZeroes items with 0s written on them.
//numNegOnes items with -1s written on them.
//We want to pick exactly k items among the available items. Return the maximum possible sum of numbers written on the items.

Input: numOnes = 3, numZeros = 2, numNegOnes = 0, k = 2
Output: 2
Explanation// We have a bag of items with numbers written on them {1, 1, 1, 0, 0}. We take 2 items with 1 written on them and get a sum in a 
//total of 2.
//It can be proven that 2 is the maximum possible sum.

var kItemsWithMaximumSum = function(numOnes, numZeros, numNegOnes, k) {
    ans = 0
  
      while (k > 0) {
          if (numOnes > 0) {
              numOnes --
              ans += 1
          } else if (numZeros > 0) {
              numZeros -- 
              ans += 0
          } else {
              numNegOnes --
              ans += -1
          }
          k --
      }
  
      return ans
    
  };
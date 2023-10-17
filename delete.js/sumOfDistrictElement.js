//You are given an array Arr of size N. Find the sum of distinct elements in an array.


Input:
N = 5
Arr= //{1, 2, 3, 4, 5}
Output// 15
Explanation //Distinct elements are 1, 2, 3 ,4, 5. So sum is 15.

class Solution {
    findSum(arr, n) {
      //code here
       let sum = 0;
      let set = new Set();
  
      for (let i = 0; i < arr.length; i++) {
          set.add(arr[i]);
      }
  
      for (let num of set) {
          sum += num;
      }
  
      return sum;
    }
  }
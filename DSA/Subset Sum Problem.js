//Given an array of positive integers arr[] and a value sum, determine if there is a subset of arr[] with sum equal to given sum. 

Examples:

Input: arr = [3, 34, 4, 12, 5, 2], sum = 9
Output: true 
Explanation:// Here there exists a subset with target sum = 9, 4+3+2 = 9.
Input: arr = [3, 34, 4, 12, 5, 2], sum = 30
Output: false
Explanation:// There is no subset with target sum 30.
Input: arr = [1, 2, 3], sum = 6
Output: true
Explanation:// The entire array can be taken as a subset, giving 1 + 2 + 3 = 6.
Constraints:
1 <= arr.size() <= 200
1<= arr[i] <= 200
1<= sum <= 104

class Solution {
    solve( i,curSum,arr, sum){
      if(curSum>sum) return false;
      if(curSum===sum) return true;
      if(i===arr.length) return false;
      
      if(this.solve(i+1,curSum+arr[i],arr,sum)){
          return true;   
      }
       return this.solve(i+1,curSum,arr,sum);
  }
  isSubsetSum(arr, sum) {
      
    return this.solve(0,0,arr,sum)   
}
}
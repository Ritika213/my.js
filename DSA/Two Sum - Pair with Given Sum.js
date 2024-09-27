//Given an array arr of positive integers and another number target. Determine whether two elements exist in arr whose sum is exactly
// target or not. Return a boolean value true if two elements exist in arr else return false.

Examples:

Input: arr = [1, 4, 45, 6, 10, 8], target =16
Output: true
Explanation:// arr[3] + arr[4] = 6 + 10 = 16
Input: arr = [1, 2, 4, 3, 6], target = 11
Output: false
Explanation:// None of the pair makes a sum of 11
//Expected Time Complexity: O(n)
//Expected Auxiliary Space: O(n)

Constraints
//1 ≤ arr.size ≤ 105
//1 ≤ arr[i] ≤ 105

class Solution {
    hasArrayTwoCandidates(arr,n,x){
        
        arr.sort(function(a,b){return a-b});
          let i=0;

        let l=n-1;

     while(i<l){

         if(arr[i]+arr[l]==x){

             return true;

         }

         else if(arr[i]+arr[l]>x){

             l--;

         }

         else{

             i++;

         }

     }

        return false;

    }

 

}
    
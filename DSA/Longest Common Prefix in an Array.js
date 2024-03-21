//Given an array of N strings, find the longest common prefix among all strings present in the array.


//Example 1:

Input:
N = 4
arr= {geeksforgeeks, geeks, geek,
         geezer}
Output: gee
Explanation// "gee" is the longest common prefix in all the given strings.

//Example 2:

Input: 
N = 2
arr = {hello, world}
Output: -1
Explanation:// There's no common prefix in the given strings.

 Task
//don't need to read input or print anything. Your task is to complete the function longestCommonPrefix() which takes the string array arr[]
 //and its size N as inputs and returns the longest common prefix common in all the strings in the array. If there's no prefix common in all the 
 //strings, return "-1".


//Expected Time Complexity: O(N*min(|arri|)).
//Expected Auxiliary Space: O(min(|arri|)) for result.


Constraints
//1 ≤ N ≤ 103
//1 ≤ |arri| ≤ 103


class Solution {
    longestCommonPrefix(arr,n){ 
        
         let ans=arr[0];

       

       for(let i=0;i<n;i++){

            let k=0;

           for( k=0;k<ans.length;k++){

               if(arr[i][k]!=ans[k]){ break;}

           }

            ans =ans.substr(0, k);

            if(ans.length==0) return "-1";

       }

       return ans;

   }


    } 

    

    
//Given an array of N strings, find the longest common prefix among all strings present in the array.


Input:
N = 4
arr = {geeksforgeeks, geeks, geek,
         geezer}
Output: gee
Explanation// "gee" is the longest common prefix in all the given strings.


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

    

    
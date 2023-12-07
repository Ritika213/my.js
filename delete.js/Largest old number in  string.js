//You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty 
//substring of num, or an empty string "" if no odd integer exists.

//A substring is a contiguous sequence of characters within a string.


Input: num = "52"
Output: "5"
Explanation: //The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.
//Example 2:

Input: num = "4206"
Output: ""
Explanation// There are no odd numbers in "4206".

var largestOddNumber = function(num) {
    num = num.split("");
    for(let i = num.length - 1; i >= 0; i--){
        if(num[i] % 2 == 0){
            num.pop();
        } else {
            break;
        }
    }
    return num.join("");

};

//Number of subarrays with maximum values in given range

//Given an array of N elements and L and R, print the number of sub-arrays such that the value of the maximum array element 
//in that subarray is at least L and at most R.

Input : 
Arr = //{2, 0, 11, 3, 0}
L = //1 and R = 10
Output 
4
Explanation
//The sub-arrays {2}, {2, 0}, {3} and {3, 0} have maximum in range 1-10.

class Solution
    {
        //Complete the function countSubarrays here
        countSubarrays(a, n, L, R)
        {
            //your code here
             let ans=0,u=0,j=-1,l=0;
        for(let i=0;i<n;i++){
            if(R>=a[i] && a[i]>=L){
                u++;
                j=i;
            }
            if(u>0 && R>=a[i]){
                ans+=(j-l);
                if(i>j)ans++;
            }
            if(a[i]>R){
                l=i+1;
                ans+=u;
                u=0;
            }
        }
        return ans+u;
    


        }
    }

    //Check if two arrays are equal or not

    //Given two arrays A and B of equal size N, the task is to find if given arrays are equal or not. Two arrays are said to be equal 
    //if both of them contain same set of elements, arrangements (or permutation) of elements may be different though.
Note : //If there are repetitions, then counts of repeated elements must also be same for two array to be equal

Input:
N = 5
A = //{1,2,5,4,0}
B= //{2,4,5,0,1}
Output// 1
Explanation //Both the array can be rearranged to {0,1,2,4,5}

class Solution {
    //Function to check if two arrays are equal or not.
    check(A,B,N){
        // code here
     
  
    // Sort both arrays 
A.sort(function(a,b){return a-b})
B.sort(function(a,b){return a-b})
  for(let i =0  ; i< N ; i++){
            
            if(A[i] != B[i]){
                return false;
            }
        }
        return true;
    

 

    }

}
    
    

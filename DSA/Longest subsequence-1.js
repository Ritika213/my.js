//Given an integer array a[] of size n, find the length of the longest subsequence such that the absolute difference between adjacent elements is 1.

//Example 1:

Input:
n = 7
a =// {10, 9, 4, 5, 4, 8, 6}
Output
3
Explaination 
//The three possible subsequences of length 3 are {10, 9, 8}, {4, 5, 4}, and {4, 5, 6}, where adjacent elements have a absolute difference of 1. 
//No valid subsequence of greater length could be formed.

//Example 2:

Input: 
n = 5
a = //{1, 2, 3, 4, 5}
Output 
5
Explaination: 
//All the elements can be included in the valid subsequence.
Task
//do not need to read input. Your task is to complete the function longestSubseq() which takes integer n and array a[] as input parameters 
//and returns the length of the longest subsequence where the absolute difference of adjacent elements is 1.

//Expected Time Complexity: O(n2)
//Expected Auxiliary Space: O(n)

Constraints
//1 ≤ n ≤ 103
//1 ≤ a[i] ≤ 103

class Solution {
    /**
    * @param number n
    * @param number[] a

    * @returns number
    */
    longestSubseq(n, a) {
        
         let maxi = 1;
        let f = new Array(1002).fill(0);
        for(let i of a){
            f[i] = 1 + Math.max(f[i-1], f[i+1]);
            maxi = Math.max(maxi, f[i]);
        }
        return maxi;
    }
}

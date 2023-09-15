//Given an array arr[] of size N, check if it can be partitioned into two parts such that the sum of elements in both parts is the same.

Input: N = 4
arr = [1, 5, 11, 5]
Output: YES
Explanation 
//The two parts are {1, 5, 5} and {11}.

class Solution {
    
    equalPartition(arr, n)
    {
        //your code here
        let S = 0;

    for (let i = 0; i < n; i++) {
        S += arr[i];
    }

    if (S % 2 === 0) {
        S /= 2;
        const dp = new Array(S + 1).fill(0);
        dp[0] = 1;

        for (let i = 0; i < n; i++) {
            for (let j = S; j >= 0; j--) {
                if (j - arr[i] >= 0) {
                    dp[j] |= dp[j - arr[i]];
                }
            }
        }

        return dp[S];
    } else {
        return 0;
    }
}
}

//Given a string S of lowercase alphabets, check if it is isogram or not. An Isogram is a string in which no letter occurs more than once.

Input:
S = machine
Output: 1
Explanation //machine is an isogram as no letter has appeared twice. Hence we print 1.

class Solution 
{
    //Function to check if a string is Isogram or not.
    isIsogram(s)
    {
        // code here
        let val = true;
    let ans = {};

    for (let i = 0; i < s.length; i++) {
        ans[s[i]] = (ans[s[i]] || 0) + 1;
        if (ans[s[i]] > 1) {
            return false;
        }
    }

    return val;
    }
}


//You are given an integer array nums consisting of 2 * n integers.

//You need to divide nums into n pairs such that:

//Each element belongs to exactly one pair.
//The elements present in a pair are equal.
//Return true if nums can be divided into n pairs, otherwise return false.

Input: nums = [3,2,3,2,2,2]
Output: true
Explanation
//There are 6 elements in nums, so they should be divided into 6 / 2 = 3 pairs.
//If nums is divided into the pairs (2, 2), (3, 3), and (2, 2), it will satisfy all the conditions.

var divideArray = function(nums) {
    nums.sort((a,b)=> a-b)
     for(let i=0; i<nums.length; i+=2){
         if(nums[i] !== nums[i+1]){
             return false
         }
     }
     return true 
   
 };
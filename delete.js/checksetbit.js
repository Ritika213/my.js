//Given a number N. You have to check whether every bit in the binary representation of the given number is set or not.

Input:
N = 7
Output:
1
Explanation//Binary for 7 is 111 all the bits are set so output is 1

class Solution{
         isBitSet( N){
            // code here
              if(N==0){
                return 0;
            }
            while(N>0){
                if((N&1)==0){
                    return 0;
                }
                N>>=1;
            }
            return 1;
        }
    };



   // You are given a 0-indexed array of positive integers nums. Find the number of triplets (i, j, k) that meet the following conditions:

0 <= i < j < k < nums.length
//nums[i], nums[j], and nums[k] are pairwise distinct.
//In other words, nums[i] != nums[j], nums[i] != nums[k], and nums[j] != nums[k].
//Return the number of triplets that meet the conditions.

 


Input: nums = [4,4,2,4,3]
Output: 3
Explanation //The following triplets meet the conditions:
//- (0, 2, 4) because 4 != 2 != 3
//- (1, 2, 4) because 4 != 2 != 3
//- (2, 3, 4) because 2 != 4 != 3
//Since there are 3 triplets, we return 3.
//Note that (2, 0, 4) is not a valid triplet because 2 > 0.


var unequalTriplets = function(nums) {
    let ans = 0
     let seen = {}
 
     for (let i =0; i< nums.length; i++) {
         if (seen.hasOwnProperty(nums[i])){
             continue
         } 
         
         for (let j = i+1; j< nums.length; j++) {
             for (let k = j+1; k < nums.length; k++) {
                 if (nums[i] !== nums[j] && nums[j] !== nums[k] && nums[i] !==nums[k]) {
                     ans++
                 }
             }
         }
         
     }
     return ans; 
 };


// Given a string S. Count the characters that have ‘N’ number of occurrences. If a character appears consecutively it is counted as 1 occurrence.


Input:
S = "abc", N = 1
Output: 3
Explanation //'a', 'b' and 'c' all have 1 occurrence.

class Solution {
    getCount(S,N){
       //code here
       let h = new Array(26).fill(0);
    let count = 0;
    h[S.charCodeAt(0) - 97]++;

    for (let i = 1; i < S.length; i++) {
        if (S[i - 1] !== S[i]) {
            h[S.charCodeAt(i) - 97]++;
        }
    }

    for (let i = 0; i < 26; i++) {
        if (h[i] === N) {
            count++;
        }
    }

    return count;
    }
}

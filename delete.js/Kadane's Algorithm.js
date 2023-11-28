//Given an array Arr[] of N integers. Find the contiguous sub-array(containing at least one number) which has the maximum sum and return its sum.

Input:
N = 5
Arr = //{1,2,3,-2,5}
Output
9
Explanation
//Max subarray sum is 9 of elements (1, 2, 3, -2, 5) which is a contiguous subarray.

class Solution {
    //Function to find the sum of contiguous subarray with maximum sum.
    maxSubarraySum(arr, N){
        // code here
       let maxh=0, maxf=arr[0];
        for(let i=0;i<N;i++) 
            {
                //Updating max sum till current index.
                maxh+=arr[i];
                //Storing max sum so far by choosing maximum between max 
                //sum so far and max till current index.
                if(maxf<maxh)
                maxf=maxh; 
                
                //If max sum at current index is negative, we do not need to add
                //it to result so we update it to zero.
                if(maxh<0)
                    maxh=0;
    
            }
            //returning the result.
            return maxf; 
    } 
}

//sum of value at indices with k set bites

//You are given a 0-indexed integer array nums and an integer k.

//Return an integer that denotes the sum of elements in nums whose corresponding indices have exactly k set bits in their binary representation.

//The set bits in an integer are the 1's present when it is written in binary.

//For example, the binary representation of 21 is 10101, which has 3 set bits.


Input: nums = [5,10,1,5,2], k = 1
Output: 13
Explanation: //The binary representation of the indices are: 
//0 = 0002
//1 = 0012
//2 = 0102
//3 = 0112
4 = 1002 
//Indices 1, 2, and 4 have k = 1 set bits in their binary representation.
//Hence, the answer is nums[1] + nums[2] + nums[4] = 13.


var sumIndicesWithKSetBits = function(nums, k) {
    const len = nums.length;
    let count = 0;
  
    for (let i = 0; i < len; i += 1) {
      let num = i;
      let bits = 0;
  
      while (num) {
        if (num & 1) bits += 1;
  
        num >>= 1;
      }
  
      if (bits === k) count += nums[i];
    }
  
    return count;   
  };

  //maximum odd binary number

 // You are given a binary string s that contains at least one '1'.

//You have to rearrange the bits in such a way that the resulting binary number is the maximum odd binary number that can be created from this combination.

//Return a string representing the maximum odd binary number that can be created from the given combination.

//Note that the resulting string can have leading zeros.

Input: s = "010"
Output: "001"
Explanation //Because there is just one '1', it must be in the last position. So the answer is "001".

var maximumOddBinaryNumber = function(s) {
    let len = s.length;
      let zero = 0;
      let result = "";
      for(let i = 0 ;i < len; i++){
          if(s[i] == '0')
              zero++;
      }
      for(let i = 0; i < (len-zero-1); i++){
          result += "1";
      }
      for(let i = 0; i < zero; i++){
          result += "0";
      }
      return result+"1";  
  };
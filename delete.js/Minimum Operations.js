//Given a number N. Find the minimum number of operations required to reach N starting from 0. You have 2 operations available:

//Double the number
//Add one to the number

Input:
N = 8
Output: 4
Explanation 
//0 + 1 = 1 --> 1 + 1 = 2 --> 2 * 2 = 4 --> 4 * 2 = 8.

class Solution {

    minOperation(n){
        
        //code here
        if(n===1) return 1;
        else if(n===2) return 2;
        let ans=0;
        let val=n;
        while(val>0){
            if(val%2===0) val/=2;
            else val-=1;
            ans++;
        }
        return ans;  
    
        
    }
}


//Swap two nibbles in a byte

//Given a number N, swap the two nibbles in it and find the resulting number. 

Input:
N = 100
Output:
70
Explanation
//100 in binary is 01100100, 
//two nibbles are (0110) and (0100)
//If we swap the two nibbles, we get
//01000110 which is 70 in decimal

class Solution {
    swapNibbles(N){
       //code here
     return ( N & 15 ) << 4 | N >> 4;  
       
    }
}


//maximum count of positive interger and negative integer.

//Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.

//In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg.
//Note that 0 is neither positive nor negative.

Input: nums = [-2,-1,-1,1,2,3]
Output: 3
Explanation //There are 3 positive integers and 3 negative integers. The maximum count among them is 3.

var maximumCount = function(nums) {
    let p=0, n=0;
          for(let i=0; i<nums.length; i++){
              if(nums[i] > 0)p++;
              else if(nums[i]<0)n++;
          }
          return n>p?n:p;  
  };
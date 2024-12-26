//given an integer array nums and an integer target.

//You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate 
//all the integers.

//For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them to build the expression "+2-1".
//Return the number of different expressions that you can build, which evaluates to target.

 

//Example 1:

Input: nums = [1,1,1,1,1], target = 3
Output: 5
Explanation// There are 5 ways to assign symbols to make the sum of nums be target 3.
//-1 + 1 + 1 + 1 + 1 = 3
//+1 - 1 + 1 + 1 + 1 = 3
//+1 + 1 - 1 + 1 + 1 = 3
//+1 + 1 + 1 - 1 + 1 = 3
//+1 + 1 + 1 + 1 - 1 = 3
//Example 2:
//Input: nums = [1], target = 1
//Output: 1

var findTargetSumWays = function(nums, target) {
    const total = nums.reduce((a,b)=> a+b,0)
    if(Math.abs(target) > total || (total + target) % 2)  return 0;
    const len = (total + target) / 2+1;
    const dp = Array(len).fill(0)
    dp[0] = 1;
    nums.forEach(num => {
       for(let i=len-1; i >= num; i--) dp[i] += dp[i - num]
    })
    return dp[len-1]
   };
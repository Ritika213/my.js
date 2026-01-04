//Given an integer array nums, return the sum of divisors of the integers in that array that have exactly four divisors. 
// If there is no such integer in the array, return 0.

 

//Example 1:

Input: nums = [21,4,7]
Output: 32
Explanation: 
//21 has 4 divisors: 1, 3, 7, 21
//4 has 3 divisors: 1, 2, 4
//7 has 2 divisors: 1, 7
//The answer is the sum of divisors of 21 only.
//Example 2:

Input: nums = [21,21]
Output: 64
//Example 3:

Input: nums = [1,2,3,4,5]
Output: 0

Constraints:

1 <= nums.length <= 104
1 <= nums[i] <= 105


var sumFourDivisors = function(nums) {
  let arr = [];
  
  for (let i = 0; i < nums.length; i++) {
    let currCount = 2;
    let currArr = [1,nums[i]];
    
    for (let j = 2; j < nums[i]; j++) {
      if (nums[i] % j === 0) {
        currCount++;
        currArr.push(j)
        }
      
      if (currCount > 4) break;
    }
    
    if (currCount === 4) arr.push(...currArr)
  }
  
  return arr.length > 0 ? arr.reduce((a,b) => b += a) : 0;  
};
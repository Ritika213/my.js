//Given a alphanumeric string S, extract maximum numeric value from S.


Input:
S = //100klh564abc365bg
Output// 564
Explanation //Maximum numeric value among 100, 564 and 365 is 564.

class Solution {
    extractMaximum(S){
       //code here
       S = S.replace(/\D/g, ' '); // Replace non-digit characters with space
    let x = -1;
    let numbers = S.split(/\s+/).filter(num => num !== ""); // Split by space and filter out empty strings
    for (let i = 0; i < numbers.length; i++) {
        let n = parseInt(numbers[i]);
        x = Math.max(x, n);
    }
    return x;
    }
}



//You are given a 0-indexed integer array nums of even length.

//As long as nums is not empty, you must repetitively:

//Find the minimum number in nums and remove it.
//Find the maximum number in nums and remove it.
//Calculate the average of the two removed numbers.
//The average of two numbers a and b is (a + b) / 2.

//For example, the average of 2 and 3 is (2 + 3) / 2 = 2.5.
//Return the number of distinct averages calculated using the above process.

//Note that when there is a tie for a minimum or maximum number, any can be removed.

 

//Example 1:

Input: nums = [4,1,4,0,3,5]
Output: 2
Explanation:
1. //Remove 0 and 5, and the average is (0 + 5) / 2 = 2.5. Now, nums = [4,1,4,3].
2. //Remove 1 and 4. The average is (1 + 4) / 2 = 2.5, and nums = [4,3].
3. //Remove 3 and 4, and the average is (3 + 4) / 2 = 3.5.
//Since there are 2 distinct numbers among 2.5, 2.5, and 3.5, we return 2.
//Example 2:

Input: nums = [1,100]
Output: 1
Explanation:
//There is only one average to be calculated after removing 1 and 100, so we return 1.
 

Constraints:

2 <= nums.length <= 100
nums.length //is even.
0 <= nums[i] <= 100


var distinctAverages = function(nums) {
    const res = new Set(); 
     nums.sort((left, right)=> left-right);
     let left=0;
     let right = nums.length-1;
      
     while (left < right){
        res.add((nums[left] + nums[right]) / 2)
        left +=1;
        right -=1;
     }
     return res.size   
   };



   //You are given a non-negative floating point number rounded to two decimal places celsius, that denotes the temperature in Celsius.

//You should convert Celsius into Kelvin and Fahrenheit and return it as an array ans = [kelvin, fahrenheit].

//Return the array ans. Answers within 10-5 of the actual answer will be accepted.

//Note that:

Kelvin = Celsius + 273.15
Fahrenheit = Celsius * 1.80 + 32.00
 

Input: celsius = 36.50
Output: [309.65000,97.70000]
Explanation //Temperature at 36.50 Celsius converted in Kelvin is 309.65 and converted in Fahrenheit is 97.70.

var convertTemperature = function(celsius) {
    const kelvin=celsius + 273.15;
      const Fahrenheit = celsius * 1.80 + 32.00;
      const arr=[kelvin,Fahrenheit];
     return arr;  
  };










































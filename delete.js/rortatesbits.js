//Given an integer N and an integer D, rotate the binary representation of the integer N by D digits to the left as well as
// right and return the results in their decimal representation after each of the rotation.
Note: //Integer N is stored using 16 bits. i.e. 12 will be stored as 0000000000001100.
Input:
N = 28, D = 2
Output:
112
7
Explanation 
//28 in Binary is: 0000000000011100
//Rotating left by 2 positions, it becomes 0000000001110000 = 112 (in decimal).
//Rotating right by 2 positions, it becomes 0000000000000111 = 7 (in decimal).

class Solution{
    rotate(n,d){
        //code here
         d = d % 16;
  let ans = [];

  // Left rotation
  let num1 = (n << d | n >>> (16 - d)) & 65535;
  ans.push(num1);

  // Right rotation
  let num2 = (n >>> d | n << (16 - d)) & 65535;
  ans.push(num2);

  return ans;

    }
}


//Given an integer N.Calculate the sum of series 13 + 23 + 33 + 43 + … till N-th term.

Input:
N=5
Output:
225
Explanation:
13+23+33+43+53-225

function sumOfSeries(N) {
    let sum = 0;
    for (let i = 0; i <= N; i++) {
      sum += i;
    }
    return sum * sum;
  }



 // Given an integer array nums of size n, return the number with the value closest to 0 in nums. 
 //If there are multiple answers, return the number with the largest value.



Input: nums = [-4,-2,1,4,8]
Output: 1
Explanation:
//The distance from -4 to 0 is |-4| = 4.
//The distance from -2 to 0 is |-2| = 2.
//The distance from 1 to 0 is |1| = 1.
//The distance from 4 to 0 is |4| = 4.
//The distance from 8 to 0 is |8| = 8.
//Thus, the closest number to 0 in the array is 1.

var findClosestNumber = function(nums) {
    let neer = Number.MAX_VALUE;
    let final;
    for (let i = 0; i < nums.length; i++){
        let diff = Math.abs(nums[i]);
        if (diff <= neer){
            if (diff == neer ){
                if(final < nums[i]){
                    final = nums[i]
                }
            } else {
                final = nums[i];
            }
            neer = diff;
        }
    }
    return final;
};    

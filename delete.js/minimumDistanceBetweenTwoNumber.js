//You are given an array a, of n elements. Find the minimum index based distance between two distinct elements of the array, x and y. 
//Return -1, if either x or y does not exist in the array.

Input:
N = 4
A = //{1,2,3,2}
x = 1, y = 2
Output: 1
Explanation// x = 1 and y = 2. There are two distances between x and y, which are 1 and 3 out of which the least is 1.

class Solution {
  
    minDist(a, n, x, y)
    {
        // code here
        
        var n1 = -1
        var n2 = -1
        var ans = Number.MAX_VALUE
        if(x==y) return 0
        for(let i=0; i<n; i++){
            if(a[i] == x) n1 = i
            if(a[i] == y) n2 = i
            if(n1!= -1 && n2 != -1) ans =  Math.min(ans, Math.abs(n2-n1))
        }
        if(n1==-1 || n2==-1) return -1
        return ans
    
    }
}


//seprate the digit in the an array

//Given an array of positive integers nums, return an array answer that consists of the digits of each integer in nums after separating 
//them in the same order they appear in nums.

//To separate the digits of an integer is to get all the digits it has in the same order.

//For example, for the integer 10921, the separation of its digits is [1,0,9,2,1].

Input: nums = [13,25,83,77]
Output: [1,3,2,5,8,3,7,7]
Explanation 
// The separation of 13 is [1,3].
// The separation of 25 is [2,5].
 //The separation of 83 is [8,3].
// The separation of 77 is [7,7].
//answer = [1,3,2,5,8,3,7,7]. Note that answer contains the separations in the same order.

var separateDigits = function(nums) {
    let digits = nums.join("");
    let result = [];
  
    for (const i in digits) {
      result.push(+digits[i]);
    }
    return result;  
  };


  //sum of primes

  //task is to calculate sum  of primes present as digits of given number N.


Input: 333
Output: 9
Explaination //3 is a prime number. It is present 3 times. So 3+3+3 = 9.

class Solution{
    primeSum(n){
        //code here
      let num = n.toString(); // Convert the number to a string
        let ans = 0;
        
        for (let i = 0; i < num.length; i++) {
            let digit = parseInt(num[i]);
            if (digit === 2 || digit === 3 || digit === 5 || digit === 7) {
                ans += digit;
            }
        }
        
        return ans;
    }
}

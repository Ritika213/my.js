//Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to .

Example
a=[1,1,2,2,4,4,5,5,5]

//There are two subarrays meeting the criterion: [1,1,2,2] and [4,4,5,5,5]. The maximum length subarray has 5 elements.

//Sample Input 0

6
//4 6 5 3 3 1
//Sample Output 0

3
//Explanation 0

//We choose the following multiset of integers from the array: {4,3,3}. Each pair in the multiset has an absolute difference <=1 
//(i.e.|4-3|=1,  and |3-3|=0 ), so we print the number of chosen integers,3 , as our answer.

function pickingNumbers(a) {
    
let sum , lengthSum = 0;
    a.sort();
    for(let i of a){
        sum = 0;
        for(let j of a ){
            if(i == j || j - i == 1){
                sum ++;
            }  
        }
        if(sum > lengthSum) {lengthSum = sum;}
    }
    return lengthSum;
}

//count nice pair in an array

//You are given an array nums that consists of non-negative integers. Let us define rev(x) as the reverse of the non-negative integer x. For example,
// rev(123) = 321, and rev(120) = 21. A pair of indices (i, j) is nice if it satisfies all of the following conditions:

0 <= i < j < nums.length
nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])
//Return the number of nice pairs of indices. Since that number can be too large, return it modulo 109 + 7.

Input: nums = [42,11,1,97]
Output: 2
Explanation //The two pairs are:
 //- (0,3) : 42 + rev(97) = 42 + 79 = 121, 97 + rev(42) = 97 + 24 = 121.
 //- (1,2) : 11 + rev(1) = 11 + 1 = 12, 1 + rev(11) = 1 + 11 = 12.

 var countNicePairs = function(nums) {
    const counts = new Map();
      
      for (const num of nums) {
          const rev = reverse(num);
          const diff = rev - num;
          
          const count = counts.get(diff);
          
          counts.set(diff, count ? count + 1 : 1);
      }
      
      let sum = 0;
      
      for (const [key, value] of counts) {
          sum += (value - 1) * value / 2;
      }  
      return sum % 1000000007;
  }
  
  function reverse(num) {
      let n = 0;
      
      while (num > 0) {
          const modulo = num % 10;
          
          n = n * 10 + modulo;
          num = (num - modulo) / 10;
      }
      
      return n;
  };

  //determine if two tree is identical

  //Given two binary trees, the task is to find if both of them are identical or not.
Note: //You need to return true or false, the printing is done by the driver code.


Input:
    // 1          1
  // /   \      /   \
 // 2     3    2     3
Output: 
Yes
Explanation: 
//There are two trees both having 3 nodes and 2 edges, both trees are identical having the root as 1, left child of 1 is 2 
//and right child of 1 is 3.

class Solution {
    //Function to check if two trees are identical.
    isIdentical(root1, root2)
    {

        if(root1 == null || root2 == null)
            return root1 == root2;
    
        if(root1 == null && root2 == null)
            return true;
            
        if(root1.data != root2.data)
            return false;
            
        return this.isIdentical(root1.left, root2.left) && this.isIdentical(root1.right, root2.right);
    }
}

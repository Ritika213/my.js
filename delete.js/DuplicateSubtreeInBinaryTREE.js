//Given a binary tree, find out whether it contains a duplicate sub-tree of size two or more, or not.

Note: //Two same leaf nodes are not considered as subtree as size of a leaf node is one. 


Input : 
             //  1
            // /   \ 
          // 2       3
        // /   \       \    
       // 4     5       2     
             //        /  \    
              //      4    5
                    Output : 1
Explanation  
   // 2     
 // /   \    
// 4     5
//is the duplicate sub-tree.


class Solution {
    constructor() {
        this.hm = new Map();
    }

    
    //Function to check whether a binary tree is balanced or not.
    dupSub(root)
    {
        //your code here
this.solve(root);
        for (let a of this.hm.keys()) {
            if (this.hm.get(a) > 1) {
                return 1;
            }
        }
        return 0;
    }
     solve(root) {
        if (root === null) {
            return "";
        }
        let ans = "";
        let l = this.solve(root.left);
        let r = this.solve(root.right);
        ans = l + root.data + r;
        if (root.left !== null || root.right !== null) {
            this.hm.set(ans, (this.hm.get(ans) || 0) + 1);
        }
        return ans;
      
    }
}




//Given an integer array nums of positive integers, return the average value of all even integers that are divisible by 3.

//Note that the average of n elements is the sum of the n elements divided by n and rounded down to the nearest integer.


Input: nums = [1,3,6,10,12,15]
Output: 9
Explanation: //6 and 12 are even numbers that are divisible by 3. (6 + 12) / 2 = 9.
//Example 2:

Input: nums = [1,2,4,7,10]
Output: 0
Explanation// There is no single number that satisfies the requirement, so return 0.


var averageValue = function(nums) {
    let sum = 0;
      let count = 0;
      for (let n of nums) {
          if (n % 6 === 0) {
              sum += n;
              count++;
          }
      }
      return sum === 0 ? sum : Math.floor(sum / count);   
  };


  //Given an array A[]  of n elements. Your task is to complete the Function num which returns an integer denoting the total number of times digit k appears in the whole array.
 Example:

Input:
A = //{11,12,13,14,15}, k=1
Output//6 
Explanation //Here digit 1 appears in the whole array 6 times.

class Solution{
    num(A,n,k){
        //code here
       let count = 0;
        for (let i = 0; i < n; i++) {
            let num = A[i];
            while (num > 0) {
                let digit = num % 10;
                if (digit === k) {
                    count++;
                }
                num = Math.floor(num / 10);
            }
        }
        return count;
        
    }
}


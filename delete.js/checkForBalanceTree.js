//Given a binary tree, find if it is height balanced or not. 
//A tree is height balanced if difference between heights of left and right subtrees is not more than one for all nodes of tree. 

//A height balanced tree
       // 1
    // /     \
   //10      39
  ///
//5

//An unbalanced tree
        1
     /    
   10   
  /
5
Input:
    //  1
    ///
   //2
   // \
   //  3 
Output: 0
Explanation //The max difference in height of left subtree and right subtree is 2,which is greater than 1. Hence unbalanced

class Solution {
    
    //Function to check whether a binary tree is balanced or not.
    check(root)
    {
        //your code here
        if (root === null)
            return 0;

        let left = this.check(root.left);
        let right = this.check(root.right);

        if (left === -1 || right === -1)
            return -1;
        else if (Math.abs(left - right) > 1)
            return -1;

        return 1 + Math.max(left, right);
    }

    isBalanced(root) {
        let k = this.check(root);
        if (k === -1)
            return false;
        else
            return true;
    }
}



//given two arrays of strings that represent two inclusive events that happened on the same day, event1 and event2, where:

event1 = [startTime1, endTime1] //and
event2 = [startTime2, endTime2]
//Event times are valid 24 hours format in the form of HH:MM.

//A conflict happens when two events have some non-empty intersection (i.e., some moment is common to both events).

//Return true if there is a conflict between two events. Otherwise, return false.


Input: event1 = ["01:15","02:00"], event2 = ["02:00","03:00"]
Output: true
Explanation //The two events intersect at time 2:00.


var haveConflict = function(event1, event2) {
    if ( event1[1] < event2[0] || event2[1] < event1[0]) {
          return false;
      } else {
          return true;
      }  
  };


 // Given a set of numbers from 1 to N, each number is exactly present twice so there are N pairs. In the worst-case scenario,
 // how many numbers X should be picked and removed from the set until we find a matching pair?

Input:
N = 1
Output:
2
Explanation//When N=1 Then there is one pair and a matching pair can be extracted in 2 Draws.

class Solution {

    find(N){
        //code here
       return ++N; 
    }
}

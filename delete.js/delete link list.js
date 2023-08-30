//Given a singly linked list and an integer x.Delete xth node from the singly linked list.

Input: //1 -> 3 -> 4 
       x = 3
Output: //1 -> 3
Explanation
//After deleting the node at 3rd position (1-base indexing), the linked list is as 1 -> 3. 

class Solution {
    deleteNode(head,x){
      //code here
      if(x===1) return head.next;
      let n=head;
      while(x>2){
          n=n.next;
          --x;
      }
      n.next=n.next.next;
      return head;
      
    }
  }

  
  //Given a number N. The task is to print a series of asterisk(*) from 1 till N terms with increasing order and difference being 1.
Input:
N = 3
Output:
//* ** ***
Explanation
//First, print 1 asterisk then space after that print 2 asterisk and space after that print 3 asterisk now stop as N is 3.

class Solution {
    printPattern(N) {
      //code here
  let output = "";
      for (let i = 1; i <= N; i++) {
          for (let j = 1; j <= i; j++) {
              output += "*";
          }
          if (i !== N) {
              output += " ";
          }
      }
      console.log(output);
    }
  }


 // You are given an integer array nums with the following properties:

nums.length == 2 * n
//nums contains n + 1 unique elements.
//Exactly one element of nums is repeated n times.
//Return the element that is repeated n times.

Input: nums = [1,2,3,3]
Output: 3

Input: nums = [2,1,2,5,3,2]
Output: 2

var repeatedNTimes = function(nums) {

    let a = [];
    for (let i = 0; i < nums.length; i++) {
        if (!a.includes(nums[i])) {
            a.push(nums[i])
        } else {
            return nums[i];
        }
    }
   
};
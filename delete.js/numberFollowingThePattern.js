//Given a pattern containing only I's and D's. I for increasing and D for decreasing. Devise an algorithm to print the minimum number 
//following that pattern. Digits from 1-9 and digits can't repeat.

Input:
D
Output:
21
Explanation
//D is meant for decreasing, so we choose the minimum number among all possible numbers like 21,31,54,87,etc.

class Solution {
    printMinNumberForPattern(s){
      //code here
      
      let v = [];
      let n = s.length;
      let ans = '';
      for (let i = 0; i <= n; i++) {
          v.push(i + 1);
      }
      for (let i = 0; i < n; i++) {
          let temp = i;
          while (temp !== n && s[temp] === 'D') {
              temp++;
          }
          v.splice(i, temp - i + 1, ...v.slice(i, temp + 1).reverse());
          if (temp !== i) {
              i = temp - 1;
          }
      }
      for (let i = 0; i <= n; i++) {
          ans += v[i].toString();
      }
      return ans;
    }
  }

  //linked list -Find Sum

 // Find the sum of odd elements in a linked list
Example
Input

//1->2->4->3->9->10->5
Output
18
Reason

//1+3+9+5 = 18
//Example 2
//2->4->6
Ouput
0
Reason

//No odd values present

var findSumOfOddElements = function(head) {
    let sum = 0;
  
      // Traverse the linked list
      while (head !== null) {
          // Check if the current value is odd
          if (head.val % 2 !== 0) {
              // Add the odd value to the sum
              sum += head.val;
          }
  
          // Move to the next node
          head = head.next;
      }
  
      return sum;
    }  


//linked list -Find Middle Element

//Given the head of a singly linked list, return the middle node of the linked list.If there are two middle nodes, return the second middle node.
//Example 1
//Input Link List = 1->2->3->4->5
//Function should return 3rd node
//Example 2
//Input Link List = 1->2->3->4->5->6
//Function should return the 4th node as it is the second middle node

var findMiddleElement = function(head) {
   
	// return the middle node of the linked list
    let slow=head;
    let fast=head;
    while(fast !=null && fast.next != null){
      slow= slow.next;
      fast= fast.next.next
    }
    return slow;
};

//linked list Delete element

//Given a linked list, remove the 3rd last Element of a linked list.
//Example
//Input 1 1->3->2->5->1->9
Output
//1->3->2->1->9
//Example 2
//Input 2
//1->3->2->5->1->9->10->7
Output
//1->3->2->1->10->7

var remove3rdlastElem = function(head) {
    
  if (!head || !head.next || !head.next.next) {
        // Less than 3 nodes in the linked list
        return printLinkList(head);
    }
 var current = head;
    var count = 0;
    while (current) {
        count++;
        current = current.next;
    }
    if (count <= 3) {
        return head.next;
    }
    current = head;
    for (var i = 0; i < count - 4; i++) {
        current = current.next;
    }
    current.next = current.next.next;
    return printLinkList(head)
}
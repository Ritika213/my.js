//Given a doubly linked list. Your task is to reverse the doubly linked list and return its head.

Examples:

Input: LinkedList:// 3 <-> 4 <-> 5
Output:// 5 <-> 4 <-> 3

//Input: LinkedList:// 75 <-> 122 <-> 59 <-> 196
Output//: 196 <-> 59 <-> 122 <-> 75

//Expected Time Complexity: O(n).
//Expected Auxiliary Space: O(1).

Constraints
//1 <= number of nodes <= 106
//0 <= node->data <= 104

class Solution {
    reverseDLL(head){
        
        
        let temp = head;
          let curPrev = null;
          let curNext = null
          
          if(head.next === null) {
              return head
          }
          while(temp !== null) {
              curNext = temp.next;
              temp.next = curPrev;
              temp.prev = curNext;
              curPrev = temp;
              temp = curNext;
              
              
          }
          
          return curPrev;
    }
  }
//Given a Doubly Linked list and a position. The task is to delete a node from a given position (position starts from 1) in a doubly 
//linked list and return the head of the doubly Linked list.

Examples:

Input:// LinkedList = 1 <--> 3 <--> 4, x = 3
Output:// 1 <--> 3
Explanation// After deleting the node at position 3 (position starts from 1),the linked list will be now as 1 <--> 3.

Input: LinkedList = //1 <--> 5 <--> 2 <--> 9, x = 1
Output//: 5 <--> 2 <--> 9
Explanation:

//Expected Time Complexity: O(n)
//Expected Auxilliary Space: O(1)

Constraints
//2 <= size of the linked list <= 106
//1 <= x <= size of the linked list 
//1 <= node->data <= 104

class Solution {
    
    deleteNode(head, x)
    {
        
    let curr = head;

    if (x === 1) {
      head = head.next;
      if (head) {
        head.prev = null;
      }
      return head;
    }

    let count = 1;
    while (curr && count < x) {
      curr = curr.next;
      count++;
    }

    if (!curr) {
      return head; // Node not found
    }

    if (curr.prev) {
      curr.prev.next = curr.next;
    }
    if (curr.next) {
      curr.next.prev = curr.prev;
    }

    return head;
  }
}

        
    

// given the head of a doubly linked list. You have to reverse the doubly linked list and return its head.

Examples:

Input:
   
Output:// 5 <-> 4 <-> 3
Explanation// After reversing the given doubly linked list the new list will be 5 <-> 4 <-> 3.

Input: 
   
Output:// 196 <-> 59 <-> 122 <-> 75
Explanation:// After reversing the given doubly linked list the new list will be 196 <-> 59 <-> 122 <-> 75.
   
Constraints
//1 ≤ number of nodes ≤ 106
//0 ≤ node->data ≤ 104

class Solution {
    reverse(head) {
        
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
   
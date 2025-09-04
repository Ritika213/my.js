//given the head of a Singly linked list. You have to reverse every k node in the linked list and return the head of the modified list.
Note:// If the number of nodes is not a multiple of k then the left-out nodes at the end, should be considered as a group and must be reversed.

Examples:

Input: k = 2,
   
Output//: 2 -> 1 -> 4 -> 3 -> 6 -> 5
Explanation// Linked List is reversed in a group of size k = 2.

Input: k = 4,
   
//Output: 4 -> 3 -> 2 -> 1 -> 6 -> 5
Explanation//: Linked List is reversed in a group of size k = 4.
   
Constraints
//1 ≤ size of linked list ≤ 105
//0 ≤ node->data ≤ 106
//1 ≤ k ≤ size of linked list 

class Solution {
    reverseKGroup(head, k) {
        
         let prev= new Node(-1);
        let first=prev;
        
        while(head != null){
            let c=0;
            let t=head;
            let last=head;
            while(head != null && c++<k){
                let next= head.next;
                head.next=last;
                last=head;
                head=next;
            }
            t.next=null;
            prev.next=last;
            prev=t;
        }
        return first.next; 
    }
}
   
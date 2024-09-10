//Given two sorted linked lists consisting of nodes respectively. The task is to merge both lists and return the head of the merged list.

Examples:

Input: LinkedList1:// 5->10->15->40, ListedList2: 2->3->20
Output:// 2->3->5->10->15->20->40
Explanation:

Input// LinkedList1: 1->1, LinkedList2: 2->4

Input: //LinkedList1: 1->1, LinkedList2: 2->4
Output:// 1->1->2->4
Explanation:

//Expected Time Complexity: O(n+m)
//Expected Auxilliary Space: O(1)

Constraints
//1 <= no. of nodes<= 105
//0 <= node->data <= 105


class Solution {
    //Function to merge two sorted linked list.
    sortedMerge(head1, head2)
    {
        
        if(head1==null)
        return head2;
    if(head2==null)
        return head1;
    
    if(head1.data>head2.data){
      let temp=head1;
      head1=head2;
      head2=temp;
    }
    
    let res = head1;
    
    while(head1 && head2){
        let temp = null;
        
        while(head1 && head1.data <= head2.data){
            temp = head1;
            head1 = head1.next;
        }
        temp.next = head2;
        temp=head1;
        head1=head2;
        head2=temp;
    }
    return res;
    }
}
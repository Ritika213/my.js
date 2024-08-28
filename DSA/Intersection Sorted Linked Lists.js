//Given that two linked lists are sorted in increasing order, create a new linked list representing the intersection of the two linked lists. 
//The new linked list should be made with without changing the original lists.

Note: //The elements of the linked list are not necessarily distinct.

Examples:

Input:// LinkedList1 = 1->2->3->4->6, LinkedList2 = 2->4->6->8
Output:// 2->4->6
Explanation//For the given two linked list, 2, 4 and 6 are the elements in the intersection.

Input: //LinkedList1 = 10->20->40->50, LinkedList2 = 15->40
Output: 40
Explaination:

//Expected Time Complexity: O(n+m)
//Expected Space Complexity: O(n+m)
Note: //n, m are the size of the respective linked lists.

Constraints
//1 <= size of linked lists <= 104
//1 <= node->data<= 104

class Solution {
    
    findIntersection(head1, head2)
    {
    
        if(head1==null||head2==null)
        return null;
    let head=null;
    let curr=null;
    
    while(head1&&head2){
        let x=head1.data;
        let y=head2.data;
        if(x>y){
            head2=head2.next;
        }
        else if(y>x){
            head1=head1.next;
        }
        else{
            if(head==null){
                head=new Node(head1.data);
                curr=head;
                head1=head1.next;
                head2=head2.next;
            }
             else{
                curr.next=new Node(head1.data);
                curr=curr.next;
                head1=head1.next;
                head2=head2.next;
            }
        }
    }
    return head;
    
    }
}
